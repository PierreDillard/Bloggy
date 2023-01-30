BEGIN;


INSERT INTO "member" ("id", "pseudo", "email", "password", "role") VALUES
(1, 'Admin', 'admin@gmail.com', 123456, 'administrateur'),
(2, 'Pro', 'pro@gmail.com', 789, 'superUser'),
(3, 'visiteur', 'visiteur@gmail.com',101010, 'user')

INSERT INTO "card" ("id", "description", "url", "type", "member_id") VALUES
(1, 'tres jolie dessin', 'www.galerie.fr', 'dessin', 8),
(3, 'belle peinture', 'www.peinture.com', 'peinture', 4)

INSERT INTO "comment" ("id", "member_id", "card_id", "content") VALUES
(1, 1, 1,'super video'),
(5, 1, 1,'bravo le portrait')


INSERT INTO "media" ("id", "type", "url", "member_id", "card_id") VALUES
(1, 'video', "www.youtube", 3, 4),
(5, 'film', 'www.daylimotion',6)


INSERT INTO "label" ("id","content", "media_id") VALUES
(9,'Très beau travail', 1),
(11,'Belle leçon de vie', 6)




INSERT INTO "organization" ("name", "member_id") VALUES
('Fabrice', 8),
('Tom', 3)



COMMIT;