const client = require("./dbClient");


const organizationModel = {
    async findByName(name){
        try{
            const sqlQuery = `SELECT * FROM organization WHERE name = $1;`;
            const values = [name];
            const result = await client.query(sqlQuery, values);
            return result.rows[0];

        }catch(err){
            console.log(err);
        }
    },

    async findAll(){
        let organizations
        try{
            const result = await client.query("SELECT * FROM organization;");
            organizations = result.rows;

        }catch(err){
            console.log(err);
        }

        return organizations;
    },
    async insert(organization){
               
        try{
            const sqlQuery = "INSERT INTO organization(name, member_id) VALUES ($1, $2) RETURNING *;";
            const values = [organization.name, organization.member_id];
            const result = await client.query(sqlQuery,values);
            console.log(result);
            console.log(result.rows[0]);
          return result.rows[0];

          }catch(err){
              console.log(err);
          }
            
    },
    async findById(id){
        let organization;
        try{
            const sqlQuery = "SELECT * FROM member WHERE id=$1;";
            const values = [id];
            const result = await client.query(sqlQuery,values);
            organization = result.rows[0];

         }catch(err){
            console.log(err);
        }

        return organization;
    },
    async update(organization){
        let organizationDb;
        try{
            const values = [];                          // []=tableau contenant des valeurs = name, member_id, id
            const parameters = [];                      // []=tableau contenant des parametres representant tout les:  noms de la propriété=$...ex: name=$1, member_id=$2, ...etc
            let counter = 1;
            
            for(const key in organization){             // "FOR IN" on lui envoi un objet "card" puis  parcourt toutes les propriétés de member (name, member_id, id)

            if(key!="id"){                              // La propriété "id" permet de faire le WHERE id= (en ligne 82) et qui contient aussi ttes les propriétés qui viennent de req.body
                                                        // (key!="id") veut dire que ttes les proprietes qui sont differents de id...on les enregistres la valeur à l'interieur de values et les
                                                        // les requetes SQL (ex: $1=name) dans parametre.

            values.push(organization[key]);                     // organization[key] represente = "organization.name, organization.member_id"

            parameters.push(`${key}=$${counter}`);      //${key}=$${counter} represente: $1=name +1 = $2=member_id...etc 

            counter++;                                  // ajout de +1 à chaque $ 
            }
            }
            values.push(organization.id);

            // "JOIN" permet de prendre chaque élément du tableau et de venir les coller ensemble, 
            //pour former une chaîne de caractère, il les sépare d'une virgule.
            const sqlQuery = `UPDATE organization SET ${parameters.join()} WHERE id=$${counter} RETURNING *;`;
            // "RETURNING avec * ": permet de retourner tout les champs qui t'interessent de la ligne qui ont été modifié.
            // il retourne un objet qui represente tout les organizations.

            const result = await client.query(sqlQuery,values);
            organizationDb = result.rows[0];
        }
        catch(err){
            console.log(err);
        }

        return organizationDb;
    },
    async delete(id){
       
        try{
            const sqlQuery = `DELETE FROM public.organization
            WHERE id=$1;`;
            const values = [id];
            const result = await client.query(sqlQuery,values);
           return result;
            // à voir ce que je remonte
            
         }catch(err){
            console.log(err);
        }

        return organizationDb;
    }
};

module.exports = organizationModel;