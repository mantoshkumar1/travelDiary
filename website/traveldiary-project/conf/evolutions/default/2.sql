# --- !Ups

--inserting data into KEYWORDS table
INSERT INTO Keyword VALUES (1,'BEACH');
INSERT INTO Keyword VALUES (2,'SUNNY');
INSERT INTO Keyword VALUES (3,'MUSEUM');
INSERT INTO Keyword VALUES (4,'VOLLEY BALL');
INSERT INTO Keyword VALUES (5,'WATER');
INSERT INTO Keyword VALUES (6,'SUN');

-- inserting Vacation for debugging

-- inserting values into role entity
INSERT INTO Role VALUES (1,'User');
INSERT INTO RoleVALUES (2,'Administrator');

-- inserting values into location entity
INSERT INTO LocationVALUES (1,'name1','description1',0.0,0.0);
INSERT INTO LocationVALUES (2,'name2','description2',1.0,1.0);
INSERT INTO LocationVALUES (3,'name3','description3',2.0,2.0);
INSERT INTO LocationVALUES (4,'name4','description4',3.0,3.0);
INSERT INTO LocationVALUES (5,'name5','description5',4.0,4.0);
INSERT INTO LocationVALUES (6,'name6','description6',5.0,5.0);
INSERT INTO LocationVALUES (7,'name7','description7',6.0,6.0);
INSERT INTO LocationVALUES (8,'name8','description8',7.0,7.0);
INSERT INTO LocationVALUES (9,'name9','description9',8.0,8.0);
INSERT INTO LocationVALUES (10,'name10','description10',9.0,9.0);
INSERT INTO LocationVALUES (11,'name11','description11',10.0,10.0);
INSERT INTO LocationVALUES (12,'name12','description12',11.0,11.0);
INSERT INTO LocationVALUES (13,'name13','description13',12.0,12.0);
INSERT INTO LocationVALUES (14,'name14','description14',13.0,13.0);
INSERT INTO LocationVALUES (15,'name15','description15',14.0,14.0);

-- inserting values into user entity
INSERT INTO UserVALUES (1,'jd','John','Doe','SOMEHASHVALUE',1);
INSERT INTO UserVALUES (2, 'jd1','John','Doe','SOMEOTHERHASHVALUE',2);

-- inserting values into vacation entity
INSERT INTO VacationVALUES (1, 'Some Vacation1','Some Description1', 2.5, date('now'), date('now'), 1, 1);
INSERT INTO VacationVALUES (2, 'Some Vacation2','Some Description2', 2.5, date('now'), date('now'), 1, 2);

-- inserting values into activity entity
INSERT INTO activity VALUES (1,	'Museum',	'Some Museum', date('now'), date('now'),  1,  1);
INSERT INTO activity VALUES (2,	'Stadium',	'Some Stadium', date('now'), date('now'),  1,  1);
INSERT INTO activity VALUES (3,	'Park',	'Some Park', date('now'), date('now'),  1,  1);
INSERT INTO activity VALUES (4,	'Museum',	'Some Museum', date('now'), date('now'),  2,  1);
INSERT INTO activity VALUES (5,	'Stadium',	'Some Stadium', date('now'), date('now'),  2,  1);
INSERT INTO activity VALUES (6,	'Beach',	'Some Beach', date('now'), date('now'),  3,  1);

-- inserting values into activitykeywords entity
insert into activitykeywords values(1,3);
insert into activitykeywords values(4,3);
insert into activitykeywords values(1,2);
insert into activitykeywords values(1,6);
insert into activitykeywords values(4,2);
insert into activitykeywords values(4,6);
insert into activitykeywords values(2,2);
insert into activitykeywords values(2,6);
insert into activitykeywords values(5,2);
insert into activitykeywords values(5,6);
insert into activitykeywords values(3,2);
insert into activitykeywords values(3,5);
insert into activitykeywords values(3,6);
insert into activitykeywords values(6,1);
insert into activitykeywords values(6,2);
insert into activitykeywords values(6,4);
insert into activitykeywords values(6,5);
insert into activitykeywords values(6,6);

-- inserting values into vacationkeywords entity
insert into vacationkeywords values(1,2);
insert into vacationkeywords values(1,3);
insert into vacationkeywords values(1,6);
insert into vacationkeywords values(2,2);
insert into vacationkeywords values(2,3);
insert into vacationkeywords values(2,6);
insert into vacationkeywords values(3,1);
insert into vacationkeywords values(3,2);
insert into vacationkeywords values(3,4);
insert into vacationkeywords values(3,5);
insert into vacationkeywords values(3,6);

-- inserting values into vacationactivities entity
INSERT INTO VACATIONACTIVITIES VALUES(1,1);
INSERT INTO VACATIONACTIVITIES VALUES(1,2);
INSERT INTO VACATIONACTIVITIES VALUES(1,3);
INSERT INTO VACATIONACTIVITIES VALUES(2,4);
INSERT INTO VACATIONACTIVITIES VALUES(2,5);
INSERT INTO VACATIONACTIVITIES VALUES(2,6);

-- inserting values into review entity
insert into review values(1, 'Some title1', 'Some description1',  date('now'),  1);
insert into review values(2, 'Some title2', 'Some description2',  date('now'),  1);
insert into review values(3, 'Some title3', 'Some description3',  date('now'),  1);
insert into review values(4, 'Some title4', 'Some description4',  date('now'),  1);
insert into review values(5, 'Some title5', 'Some description5',  date('now'),  1);
insert into review values(6, 'Some title6', 'Some description6',  date('now'),  1);
insert into review values(7, 'Some title7', 'Some description7',  date('now'),  1);
insert into review values(8, 'Some title8', 'Some description8',  date('now'),  1);

-- inserting values into vacationreviews entity
insert into vacationreviews values(1,1);
insert into vacationreviews values(2,2);

-- inserting values into activityreviews entity
insert into activityreviews values(1,3);
insert into activityreviews values(2,4);
insert into activityreviews values(3,5);
insert into activityreviews values(4,6);
insert into activityreviews values(5,7);
insert into activityreviews values(6,8);

# --- !Downs