hello la team 

1 dossier app :    - dossier contollers :
                            * fichiers :  memberController.js
                            cardController.js
                            organizationContoller.js
                            labelController.js
                            mediaController.js
                            commentController.js (voir avec Ben)
                  
                    - dossier database
                            * fichier :
                             index.js

                    - dossier docs
                            fichier :
                            MCD
                            MLD
                            User Stories

                    - dossier handlers
                            fichier :
                            errorHandlers.js

                    - dossier middlewares
                           
                    - dossier models (dataMapper)
                             fichier:
                            index.js
                            Member.js
                            Card.js
                            Organization.js
                            Label.js
                            Media.js
                            MediaHasLabel.js
                            Comment.js
                
                    - dossier router: 
                            * fichier 
                            index.js
                            MemberRouter.js
                            CardRouter.js
                            OrganizationRouter.js
                            LabelRouter.js
                            MediaRouter.js
                            CommentRouter.js(voir Ben)

                  

2 Public (client)
                        - dossier css
                            * fichier app.css
                            * fichier app.js

                        - dossier js

                        index.html


3 dossier data :
                         fichiers :
                         0 create_tables.sql
                         1 create_role_and_db.sql
                         2 seed_database.sql
                         3 test-request-sequelize.sql

4 dossier sandbox:
                        fichier : 
                        connect-db-tests.js


.env.example
.gitignore
index.js
routes.http               

AAïe Caramba 

Autorisation sur les routes:


| en tant qu'ADMIN           |Login   |M'inscrire |Member  |Card    |Comment |label   |Media   |Organization|
|:--------------------------:|:------:|:---------:|:------:|:------:|:------:|:------:|:------:|:----------:|
|je peux me                  |Oui     |Non        |        |        |        |        |        |            |
|je vois tous les            |        |           |Oui     |Oui     |Oui     |oui     |oui     | oui        |
|je vois un/une              |        |           |Oui     |Oui     |Oui     |oui     |oui     | oui        |
|je peux ajouter             |        |           |Oui     |Oui     |Oui     |oui     |oui     | oui        |
|je peux modifier            |        |           |Oui     |Oui     |Oui     |oui     |oui     | oui        |
|je peux supprimer           |        |           |Oui     |Oui     |Oui     |oui     |oui     | oui        |
| en tant que PRO            |Login   |M'inscrire |Member  |Card    |Comment |label   |Media   |Organization|
|:--------------------------:|:------:|:---------:|:------:|:------:|:------:|:------:|:------:|:----------:|
|je peux me                  |Oui     |Oui        |        |        |        |        |        |            |
|je vois tous les            |        |           |Non     |Oui     |Oui     |oui     |oui     | oui        |
|je vois un/une              |        |           |Non     |Oui     |Oui     |oui     |oui     | oui        |
|je peux ajouter             |        |           |Non     |Oui     |Oui     |oui     |oui     | oui        |
|je peux modifier            |        |           |Non     |Oui     |Oui     |oui     |oui     | oui        |
|je peux supprimer           |        |           |Non     |Oui     |Oui     |oui     |oui     | oui        |
| en tant que VISITEUR       |Login   |M'inscrire |Member  |Card    |Comment |label   |Media   |Organization|
|:--------------------------:|:------:|:---------:|:------:|:------:|:------:|:------:|:------:|:----------:|
|je peux me                  |Oui     |Non        |        |        |        |        |        |            |
|je vois toutes les membres  |        |           |Non     |Non     |Non     |Non     |Non     |Non         |
|je vois un membre           |        |           |Non     |Non     |Non     |Non     |Non     |Non         |
|je peux ajouter             |        |           |Non     |Non     |Non     |Non     |Non     |Non         |
|je peux modifier            |        |           |Non     |Non     |Non     |Non     |Non     |Non         |
|je peux supprimer           |        |           |Non     |Non     |Non     |Non     |Non     |Non         | (modifié) 












