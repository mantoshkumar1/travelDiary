# --- !Ups

--inserting data into KEYWORDS table
INSERT INTO Keyword VALUES (1,'BEACH');
INSERT INTO Keyword VALUES (2,'SUNNY');
INSERT INTO Keyword VALUES (3,'MUSEUM');
INSERT INTO Keyword VALUES (4,'VOLLEY BALL');
INSERT INTO Keyword VALUES (5,'WATER');
INSERT INTO Keyword VALUES (6,'SUN');

-- A small example
INSERT INTO Role VALUES (1,'User');
INSERT INTO Role VALUES (2,'Administrator');

INSERT INTO Location VALUES (1,'name1','description1',1.0,1.0);
INSERT INTO Location VALUES (2,'name2','description2',2.0,2.0);
INSERT INTO Location VALUES (3,'name3','description3',3.0,3.0);
INSERT INTO Location VALUES (4,'name4','description4',4.0,4.0);

INSERT INTO User VALUES (1,'user1','name1','lname1','email1@mail.com','SOMEHASHVALUE1',1,1);
INSERT INTO User VALUES (2,'user2','name2','lname2','email2@mail.com','SOMEHASHVALUE2',1,2);
INSERT INTO User VALUES (3,'user3','name3','lname3','email3@mail.com','SOMEHASHVALUE3',1,3);
INSERT INTO User VALUES (4,'user4','name4','lname4','email4@mail.com','SOMEHASHVALUE4',1,4);

INSERT INTO Vacation VALUES (1, 'Some Vacation1','Some Description1', 2.5, strftime('%Y-%m-%d %H:%M:%f','now'),strftime('%Y-%m-%d %H:%M:%f','now'), 1, 1);
INSERT INTO Vacation VALUES (2, 'Some Vacation2','Some Description2', 2.5, strftime('%Y-%m-%d %H:%M:%f','now'),strftime('%Y-%m-%d %H:%M:%f','now'), 2, 2);
INSERT INTO Vacation VALUES (3, 'Some Vacation3','Some Description3', 2.5, strftime('%Y-%m-%d %H:%M:%f','now'),strftime('%Y-%m-%d %H:%M:%f','now'), 3, 3);
INSERT INTO Vacation VALUES (4, 'Some Vacation4','Some Description4', 2.5, strftime('%Y-%m-%d %H:%M:%f','now'),strftime('%Y-%m-%d %H:%M:%f','now'), 4, 4);

INSERT INTO Activity VALUES(1,'Activity1','Activity description 1',strftime('%Y-%m-%d %H:%M:%f','now'),strftime('%Y-%m-%d %H:%M:%f','now'),1,1);
INSERT INTO Activity VALUES(2,'Activity2','Activity description 2',strftime('%Y-%m-%d %H:%M:%f','now'),strftime('%Y-%m-%d %H:%M:%f','now'),2,2);
INSERT INTO Activity VALUES(3,'Activity3','Activity description 3',strftime('%Y-%m-%d %H:%M:%f','now'),strftime('%Y-%m-%d %H:%M:%f','now'),3,3);
INSERT INTO Activity VALUES(4,'Activity4','Activity description 4',strftime('%Y-%m-%d %H:%M:%f','now'),strftime('%Y-%m-%d %H:%M:%f','now'),4,4);

INSERT INTO activitykeywords VALUES(1,1);
INSERT INTO activitykeywords VALUES(1,2);
INSERT INTO activitykeywords VALUES(1,4);
INSERT INTO activitykeywords VALUES(1,5);
INSERT INTO activitykeywords VALUES(1,6);
INSERT INTO activitykeywords VALUES(2,1);
INSERT INTO activitykeywords VALUES(2,2);
INSERT INTO activitykeywords VALUES(2,4);
INSERT INTO activitykeywords VALUES(2,5);
INSERT INTO activitykeywords VALUES(2,6);
INSERT INTO activitykeywords VALUES(3,3);
INSERT INTO activitykeywords VALUES(4,1);
INSERT INTO activitykeywords VALUES(4,2);
INSERT INTO activitykeywords VALUES(4,4);
INSERT INTO activitykeywords VALUES(4,5);
INSERT INTO activitykeywords VALUES(4,6);

INSERT INTO vacationkeywords VALUES(1,1);
INSERT INTO vacationkeywords VALUES(1,2);
INSERT INTO vacationkeywords VALUES(1,4);
INSERT INTO vacationkeywords VALUES(1,5);
INSERT INTO vacationkeywords VALUES(1,6);
INSERT INTO vacationkeywords VALUES(2,1);
INSERT INTO vacationkeywords VALUES(2,2);
INSERT INTO vacationkeywords VALUES(2,4);
INSERT INTO vacationkeywords VALUES(2,5);
INSERT INTO vacationkeywords VALUES(2,6);
INSERT INTO vacationkeywords VALUES(3,3);
INSERT INTO vacationkeywords VALUES(4,1);
INSERT INTO vacationkeywords VALUES(4,2);
INSERT INTO vacationkeywords VALUES(4,4);
INSERT INTO vacationkeywords VALUES(4,5);
INSERT INTO vacationkeywords VALUES(4,6);

INSERT INTO vacationactivities VALUES(1,1);
INSERT INTO vacationactivities VALUES(1,2);
INSERT INTO vacationactivities VALUES(1,4);
INSERT INTO vacationactivities VALUES(2,1);
INSERT INTO vacationactivities VALUES(2,2);
INSERT INTO vacationactivities VALUES(2,4);
INSERT INTO vacationactivities VALUES(3,3);
INSERT INTO vacationactivities VALUES(4,1);
INSERT INTO vacationactivities VALUES(4,2);
INSERT INTO vacationactivities VALUES(4,4);

INSERT INTO reviews VALUES(1,'review1','review description1',strftime('%Y-%m-%d %H:%M:%f','now'),1,'LOVED_IT');
INSERT INTO reviews VALUES(2,'review2','review description2',strftime('%Y-%m-%d %H:%M:%f','now'),2,'LOVED_IT');
INSERT INTO reviews VALUES(3,'review3','review description3',strftime('%Y-%m-%d %H:%M:%f','now'),3,'LOVED_IT');
INSERT INTO reviews VALUES(4,'review4','review description4',strftime('%Y-%m-%d %H:%M:%f','now'),4,'LOVED_IT');
INSERT INTO reviews VALUES(5,'review5','review description5',strftime('%Y-%m-%d %H:%M:%f','now'),1,'LOVED_IT');
INSERT INTO reviews VALUES(6,'review6','review description6',strftime('%Y-%m-%d %H:%M:%f','now'),2,'LOVED_IT');
INSERT INTO reviews VALUES(7,'review7','review description7',strftime('%Y-%m-%d %H:%M:%f','now'),3,'LOVED_IT');
INSERT INTO reviews VALUES(8,'review8','review description8',strftime('%Y-%m-%d %H:%M:%f','now'),4,'LOVED_IT');
INSERT INTO reviews VALUES(9,'review9','review description9',strftime('%Y-%m-%d %H:%M:%f','now'),1,'LOVED_IT');
INSERT INTO reviews VALUES(10,'review10','review description10',strftime('%Y-%m-%d %H:%M:%f','now'),2,'LOVED_IT');
INSERT INTO reviews VALUES(11,'review11','review description11',strftime('%Y-%m-%d %H:%M:%f','now'),3,'LOVED_IT');
INSERT INTO reviews VALUES(12,'review12','review description12',strftime('%Y-%m-%d %H:%M:%f','now'),4,'LOVED_IT');
INSERT INTO reviews VALUES(13,'review13','review description13',strftime('%Y-%m-%d %H:%M:%f','now'),1,'LOVED_IT');
INSERT INTO reviews VALUES(14,'review14','review description14',strftime('%Y-%m-%d %H:%M:%f','now'),2,'LOVED_IT');

INSERT INTO activityreviews VALUES(1,1);
INSERT INTO activityreviews VALUES(1,2);
INSERT INTO activityreviews VALUES(1,3);
INSERT INTO activityreviews VALUES(2,4);
INSERT INTO activityreviews VALUES(2,5);
INSERT INTO activityreviews VALUES(2,6);
INSERT INTO activityreviews VALUES(3,7);
INSERT INTO activityreviews VALUES(4,8);
INSERT INTO activityreviews VALUES(4,9);
INSERT INTO activityreviews VALUES(4,10);

INSERT INTO vacationactivities VALUES(1,13);
INSERT INTO vacationactivities VALUES(2,14);
INSERT INTO vacationactivities VALUES(3,11);
INSERT INTO vacationactivities VALUES(4,12);
# --- !Downs