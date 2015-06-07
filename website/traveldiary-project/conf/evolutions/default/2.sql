# --- !Ups

--inserting data into KEYWORDS table
INSERT INTO Keyword VALUES (1,'BEACH');
INSERT INTO Keyword VALUES (2,'SUNNY');
INSERT INTO Keyword VALUES (3,'MUSEUM');
INSERT INTO Keyword VALUES (4,'VOLLEY BALL');
INSERT INTO Keyword VALUES (5,'WATER');
INSERT INTO Keyword VALUES (6,'SUN');

-- A small example
INSERT INTO Role VALUES (0,'User');

INSERT INTO Location VALUES (0,'name1','description1',0.0,0.0);

INSERT INTO User
VALUES (0,'jd','John','Doe','email@mail.com','SOMEHASHVALUE',0,0);

INSERT INTO Vacation
VALUES (0, 'Some Vacation','Some Description', 2.5, strftime('%Y-%m-%d %H:%M:%f','now'),strftime('%Y-%m-%d %H:%M:%f','now'), 0, 0);

# --- !Downs