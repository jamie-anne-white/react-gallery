CREATE TABLE "gallery"(
	"id" SERIAL PRIMARY KEY,
	"path" VARCHAR (250) NOT NULL,
	"description" VARCHAR (250) NOT NULL,
	"likes" INT
);

-- Data for table
INSERT INTO "gallery" ("path", "description", "likes")
VALUES ('images/folki_hat.jpg', 'A doggo in a hat', 0);

INSERT INTO "gallery" ("path", "description", "likes")
VALUES ('images/gibbs.jpg', 'A cat who wants to climb', 0);

INSERT INTO "gallery" ("path", "description", "likes")
VALUES ('images/theo_bath.jpg', 'A cat who does not like baths', 0);

INSERT INTO "gallery" ("path", "description", "likes")
VALUES ('images/hunger_horns_gr.jpeg', '7th street entry green room', 0);

INSERT INTO "gallery" ("path", "description", "likes")
VALUES ('images/nick_jamie_hooters.jpeg', 'Hooters shirts', 0);

INSERT INTO "gallery" ("path", "description", "likes")
VALUES ('images/utah_blm_land.jpeg', 'Living in a van in Utah', 0);