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
        let organizationDB;
        try{
            // const sqlQuery = `UPDATE public.organization
            // SET route=$1, organization=$2
            // WHERE id=$3 RETURNING *;`;
            // const values = [organization.route,label.organization,id];

            const sqlQuery = "SELECT * FROM update_organization($1)";
            const values = [organization];

            const result = await client.query(sqlQuery,values);
            organizationDB = result.rows[0];

        }catch(err){
            console.log(err);
        }
        return organizationDB;
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

        return;
    }
};

module.exports = organizationModel;