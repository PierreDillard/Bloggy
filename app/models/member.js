const client = require("./dbClient");

const { cpSync } = require("fs");


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

        }catch(err){
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

        }catch(err){
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

        }catch(err){
            console.log(err);
        }
        return member;
    },
    async update(member){
        let memberDB;
        try{
            // const sqlQuery = `UPDATE public.member
            // SET route=$1, member=$2
            // WHERE id=$3 RETURNING *;`;
            // const values = [member.route,label.member,id];

            const sqlQuery = "SELECT * FROM update_member($1)";
            const values = [member];

            const result = await client.query(sqlQuery,values);
            memberDB = result.rows[0];

       }catch(err){
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