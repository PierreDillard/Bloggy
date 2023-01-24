require("dotenv").config({ path: '../.env' });
const categories = require("../data/categories.json");
const posts = require("../data/posts.json");
const {Client} = require("pg");
const client = new Client();
client.connect();

// 0. j'efface toutes les données
async function removeData(){
    await client.query("TRUNCATE post,category CASCADE");
}

// 1. j'enregistre les catégories
async function importCategories(){
    console.log("Nombre de catégories à importer : ",categories.length);
    let counter = 0;
    for(const category of categories){
        // INSERT INTO public.category(	route, label) VALUES ('route', 'label');
        //console.log(category);
        const result = await client.query(`INSERT INTO public.category(route, label) VALUES ('${category.route}', '${category.label}') RETURNING id;`);
    
        //console.log(result.rows[0].id);
        category.id = result.rows[0].id;
        counter++;
    }
    // console.log(categories);
    console.log("Nombre de catégories importées : ",counter);
}


// 2. j'enregistre les posts
async function importPosts(){
    console.log("Nombre de posts à importer : ",posts.length);
    let counter = 0;
    for(const post of posts){
        // console.log(post);
        // INSERT INTO public.category(	route, label) VALUES ('route', 'label');
        // console.log(post.category);
        
       const category = categories.find(category=>category.label == post.category) ;
        //    console.log(category);
       const categoryId = category.id;

        const sqlQuery = `
            INSERT INTO public.post
            (title, slug, excerpt, content, category_id) 
            VALUES 
            ('${post.title}', '${post.slug}','${post.excerpt.replaceAll("'","''")}', '${post.content.replaceAll("'","''")}', ${categoryId});
        `;
        // console.log(sqlQuery);
        await client.query(sqlQuery);

        counter++;
    }
    console.log("Nombre de posts importés : ",counter);
}

// Ma fonction optimisée va totut effectuer via une seule grosse requête
async function optimizedImportCategories(){
    let counter = 1;
    let sqlQuery = "INSERT INTO public.category(route, label) VALUES ";
    let valuesArray = [];
    let parametersArray = [];
    for(const category of categories){
        valuesArray.push(category.route);
        valuesArray.push(category.label);
        
        const parameter = `($${counter},$${counter+1})`;
        // console.log(parameter);
        parametersArray.push(parameter);
        
        counter+=2;
    }

    /* INSERT INTO public.category(	route, label) VALUES 
    ('route', 'label'),
    ('route2', 'label2'),
    ('route3', 'label3');

    sqlQuery = `INSERT INTO public.category(	route, label) VALUES 
    ($1, $2),
    ($3, $4),
    ($5, $6)`;
    values = ['route','label','route2','label2','route3','label3']
    parameters = ["($1,$2)","($3,$4)","($5,$6)"] => parameters.join(",")
    */

    sqlQuery += parametersArray.join(",") + " RETURNING id,label";
    //console.log(sqlQuery);
    const result = await client.query(sqlQuery,valuesArray);
    //console.log(result);
    return result.rows;
    // console.log(categories);
}

async function optimizedImportPosts(data){
    let sqlQuery = `
    INSERT INTO public.post
    (title, slug, excerpt, content, category_id) 
    VALUES `;
    const values = [];

    // je simplifie le jeu de données pour mes tests
    const postsTemp = [
        {
            "category": "Angular",
            "slug": "angular-une-fausse-bonne-idee",
            "title": "Angular, une fausse bonne idée ?",
            "excerpt": "Lorem <em",
            "content":"content1"
        },
        {
            "category": "React",
            "slug": "test2-une-fausse-bonne-idee",
            "title": "test2, une fausse bonne idée ?",
            "excerpt": "Lorem <em",
            "content":"content2"
        },
    ];
    for(const post of posts){

       const category = data.find(category=>category.label == post.category) ;
       const categoryId = category.id;

        // postQuery = ('titre1','titre1','excerpt titre1','content titre1',1)
       const postQuery =`('${post.title}', '${post.slug}','${post.excerpt.replaceAll("'","''")}', '${post.content.replaceAll("'","''")}', ${categoryId})`;
    //    console.log(postQuery);
       values.push(postQuery);
    }

    sqlQuery += values.join(",");
    // console.log(sqlQuery);
    await client.query(sqlQuery);

}

async function importData(){
    await removeData();

    // await importCategories();
    // console.log("###########################################");
    // await importPosts();

    const categoriesImported = await optimizedImportCategories();
    console.log("Import des catégories terminé");
    console.log("###########################################");
    await optimizedImportPosts(categoriesImported);
    console.log("Import des posts terminé");
}

importData();