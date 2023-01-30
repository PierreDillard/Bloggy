BEGIN;


INSERT INTO "member" ("id", "pseudo", "email", "password", "role") VALUES
(1, 'Admin', 'admin@gmail.com', 123456, 'administrateur'),
(2, 'Pro', 'pro@gmail.com', 789, 'superUser'),
(3, 'visiteur', 'visiteur@gmail.com',101010, 'user');

INSERT INTO "card" ("id", "description", "url", "type", "member_id") VALUES
(1, 'tres jolie dessin', 'www.galerie.fr', 'dessin', 8),
(3, 'belle peinture', 'www.peinture.com', 'peinture', 4);



COMMIT;