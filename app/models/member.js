const client = require("./dbClient");

const memberModel = {
    async findByEmail(mail){
        try{
            const sqlQuery = `SELECT * FROM member WHERE email = $1;`;
            const values = [mail];
            const result = await client.query(sqlQuery, values);
            return result.rows[0];

        }catch(err){
            console.log(err);
        }
    },
    async findAll(){
        let members
        try{
            const result = await client.query("SELECT * FROM member;");
            members = result.rows;
        }
        catch(err){
            console.log(err);
        }

        return members;
    },
    async insert(member){
        try{
            const sqlQuery = "INSERT INTO member(pseudo, email, password, role) VALUES ($1, $2, $3, $4) RETURNING *;";
            const values = [member.pseudo,member.email, member.password, member.role];
            const result = await client.query(sqlQuery, values);
            return result.rows[0];
        }
        catch(err){
            console.log(err);
        }
    },
    async findById(id){
        let member;
        try{
            const sqlQuery = "SELECT * FROM member WHERE id=$1;";
            const values = [id];
            const result = await client.query(sqlQuery,values);
            member = result.rows[0];
        }
        catch(err){
            console.log(err);
        }

        return member;
    },
    async update(member){
        let memberDB;
        try{
            //1ere façon la plus courte pour faire la requete modify/update
            //const values = [member.pseudo, member.email, member.password, member.role, member.id];
            //const sqlQuery = `UPDATE member SET pseudo=$1, email=$2, password = $3, role = $4 WHERE id=$5 RETURNING *;`;
            
            //2eme façon de faire la requete modify/update
            const values = [];
            const parameters = [];
            let counter = 1;
            for(const key in member){
            if(key!="id"){
            values.push(member[key]);
            parameters.push(`${key}=$${counter}`);
            counter++;
            }
            }
            values.push(member.id);

            const sqlQuery = `UPDATE member SET ${parameters.join()} WHERE id=$${counter} RETURNING *;`;

            const result = await client.query(sqlQuery,values);
            memberDB = result.rows[0];
        }
        catch(err){
            console.log(err);
        }

        return memberDB;
    },
    async delete(id){
       
        try{
            const sqlQuery = `DELETE FROM public.member
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

module.exports = memberModel;