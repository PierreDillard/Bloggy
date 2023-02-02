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
        let memberDb;
        try{
            //***1ere façon la plus courte pour faire la requete modify/update***
            //const values = [member.pseudo, member.email, member.password, member.role, member.id];
            //const sqlQuery = `UPDATE member SET pseudo=$1, email=$2, password = $3, role = $4 WHERE id=$5 RETURNING *;`;
            
            //***2eme façon plus longue pour faire la requete modify/update**

            const values = [];                          // []=tableau contenant des valeurs= pseudo, email, password, role, id
            const parameters = [];                      // []=tableau contenant des parametres representant tout les:  noms de la propriété=$...ex: pseudo=$1, email=$2, password=$3...etc
            let counter = 1;
            
            for(const key in member){                   // "FOR IN" on lui envoi un objet "member" puis  parcourt toutes les propriétés de member (pseudo, email, password, role, member_id)

            if(key!="id"){                              // La propriété "id" permet de faire le WHERE id= (en ligne 82) et qui contient aussi ttes les propriétés qui viennent de req.body
                                                        // (key!="id") veut dire que ttes les proprietes qui sont differents de id...on les enregistres la valeur à l'interieur de values et les
                                                        // les requetes SQL (ex: $1=peudo) dans parametre.

            values.push(member[key]);                   // member[key] represente = "member.peudo", "member.email", "member.password", "member.role", "member.id"

            parameters.push(`${key}=$${counter}`);      //${key}=$${counter} represente: $1=pseudo +1 = $2=email +1 $3=password...etc 

            counter++;                                  // ajout de +1 à chaque $ 
            }
            }
            values.push(member.id);

            // "JOIN" permet de prendre chaque élément du tableau et de venir les coller ensemble, 
            //pour former une chaîne de caractère, il les sépare d'une virgule.
            const sqlQuery = `UPDATE member SET ${parameters.join()} WHERE id=$${counter} RETURNING *;`;
            // "RETURNING avec * ": permet de retourner tout les champs qui t'interessent de la ligne qui ont été modifié.
            // il retourne un objet qui represente tout les membres.

            const result = await client.query(sqlQuery,values);
            memberDb = result.rows[0];
        }
        catch(err){
            console.log(err);
        }

        return memberDb;
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
        return memberDb;
    }
};

module.exports = memberModel;