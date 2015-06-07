# --- !Ups

--inserting data into KEYWORDS table
INSERT INTO Keyword VALUES (1,'BEACH');
INSERT INTO Keyword VALUES (2,'SUNNY');
INSERT INTO Keyword VALUES (3,'MUSEUM');
INSERT INTO Keyword VALUES (4,'VOLLEY BALL');
INSERT INTO Keyword VALUES (5,'WATER');
INSERT INTO Keyword VALUES (6,'SUN');

-- inserting Vacation for debugging

INSERT INTO Role
VALUES (1,'User');

INSERT INTO Role
VALUES (2,'Administrator');

INSERT INTO Location
VALUES (1,'name','description',0.0,0.0);

INSERT INTO User
VALUES (1,'jd','John','Doe','SOMEHASHVALUE',1);

INSERT INTO Vacation
VALUES (1, 'Some Vacation','Some Description', 2.5, date('now'), date('now'), 1, 1);

INSERT INTO activity VALUES (1,	'Museum',	'Some Museum', date('now'), date(now),  1,  1);
INSERT INTO activity VALUES (2,	'Stadium',	'Some Stadium', date('now'), date(now),  1,  1);
INSERT INTO activity VALUES (3,	'Park',	'Some Park', date('now'), date(now),  1,  1);

# --- !Downs