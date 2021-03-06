# --- !Ups

--inserting data into KEYWORDS table
INSERT INTO Keyword VALUES (1, 'BEACH');
INSERT INTO Keyword VALUES (2, 'SUNNY');
INSERT INTO Keyword VALUES (3, 'MUSEUM');
INSERT INTO Keyword VALUES (4, 'VOLLEY BALL');
INSERT INTO Keyword VALUES (5, 'WATER');
INSERT INTO Keyword VALUES (6, 'OCEAN');
INSERT INTO Keyword VALUES (7, 'MOUNTAINS');
INSERT INTO Keyword VALUES (8, 'HIKING');
INSERT INTO Keyword VALUES (9, 'DIVING');
INSERT INTO Keyword VALUES (10, 'CITY');
INSERT INTO Keyword VALUES (11, 'SUMMER');
INSERT INTO Keyword VALUES (12, 'WARM');
INSERT INTO Keyword VALUES (13, 'COLD');
INSERT INTO Keyword VALUES (14, 'SKIING');
INSERT INTO Keyword VALUES (15, 'BIKING');
INSERT INTO Keyword VALUES (16, 'SWIMMING');

-- A small example
INSERT INTO Role VALUES (1, 'User');
INSERT INTO Role VALUES (2, 'Administrator');

INSERT INTO Location VALUES (1, 'name1', 'description1', 1.0, 1.0, 'address1', 'googleMapsLink1');
INSERT INTO Location VALUES (2, 'name2', 'description2', 2.0, 2.0, 'address2', 'googleMapsLink2');
INSERT INTO Location VALUES (3, 'name3', 'description3', 3.0, 3.0, 'address3', 'googleMapsLink3');
INSERT INTO Location VALUES (4, 'name4', 'description4', 4.0, 4.0, 'address4', 'googleMapsLink4');

INSERT INTO User VALUES (1, 'user1', 'name1', 'lname1', 'email1@mail.com', '', 'SOMEHASHVALUE1', 1, 1);
INSERT INTO User VALUES (2, 'user2', 'name2', 'lname2', 'email2@mail.com', '', 'SOMEHASHVALUE2', 1, 2);
INSERT INTO User VALUES (3, 'user3', 'name3', 'lname3', 'email3@mail.com', '', 'SOMEHASHVALUE3', 1, 3);
INSERT INTO User VALUES (4, 'user4', 'name4', 'lname4', 'email4@mail.com', '', 'SOMEHASHVALUE4', 1, 4);

INSERT INTO Vacation VALUES (1, 'Partying in Ibiza', 'Some Description1', 2.5, strftime('%Y-%m-%d %H:%M:%f', 'now'),
                             strftime('%Y-%m-%d %H:%M:%f', 'now'), 1, 1);
INSERT INTO Vacation VALUES (2, 'Relaxing in Miami', 'Some Description2', 2.5, strftime('%Y-%m-%d %H:%M:%f', 'now'),
                             strftime('%Y-%m-%d %H:%M:%f', 'now'), 2, 2);
INSERT INTO Vacation VALUES
  (3, 'The Louvre and much More', 'Some Description3', 300, strftime('%Y-%m-%d %H:%M:%f', 'now'),
   strftime('%Y-%m-%d %H:%M:%f', 'now'), 3, 3);
INSERT INTO Vacation VALUES
  (4, 'Relaxing Times in Italy', 'Some Description4', 1000, strftime('%Y-%m-%d %H:%M:%f', 'now'),
   strftime('%Y-%m-%d %H:%M:%f', 'now'), 4, 4);
INSERT INTO Vacation VALUES
  (5, 'Finding Yetis in the Alps', 'Some Description5', 700, strftime('%Y-%m-%d %H:%M:%f', 'now'),
   strftime('%Y-%m-%d %H:%M:%f', 'now'), 1, 1);
INSERT INTO Vacation VALUES
  (6, 'Hiking across the Andes', 'Some Description6', 200, strftime('%Y-%m-%d %H:%M:%f', 'now'),
   strftime('%Y-%m-%d %H:%M:%f', 'now'), 2, 2);
INSERT INTO Vacation VALUES (7, 'Diving in Hawaii', 'Some Description7', 70, strftime('%Y-%m-%d %H:%M:%f', 'now'),
                             strftime('%Y-%m-%d %H:%M:%f', 'now'), 3, 3);
INSERT INTO Vacation VALUES
  (8, 'The Grand Amsterdam Tour', 'Some Description8', 300, strftime('%Y-%m-%d %H:%M:%f', 'now'),
   strftime('%Y-%m-%d %H:%M:%f', 'now'), 4, 4);
INSERT INTO Vacation VALUES (9, 'Munich for Families', 'Some Description9', 50, strftime('%Y-%m-%d %H:%M:%f', 'now'),
                             strftime('%Y-%m-%d %H:%M:%f', 'now'), 1, 1);
INSERT INTO Vacation VALUES
  (10, 'Innsbruck with Skiing', 'Some Description10', 150, strftime('%Y-%m-%d %H:%M:%f', 'now'),
   strftime('%Y-%m-%d %H:%M:%f', 'now'), 2, 2);
INSERT INTO Vacation VALUES
  (11, 'Salzburg for Sports Enthusiasts', 'Some Description11', 2500, strftime('%Y-%m-%d %H:%M:%f', 'now'),
   strftime('%Y-%m-%d %H:%M:%f', 'now'), 3, 3);
INSERT INTO Vacation VALUES
  (12, 'Discovering German Beer in Munich', 'Some Description12', 1200, strftime('%Y-%m-%d %H:%M:%f', 'now'),
   strftime('%Y-%m-%d %H:%M:%f', 'now'), 4, 4);
INSERT INTO Vacation VALUES
  (13, 'Finding Love in Paris', 'Some Description13', 800, strftime('%Y-%m-%d %H:%M:%f', 'now'),
   strftime('%Y-%m-%d %H:%M:%f', 'now'), 1, 1);
INSERT INTO Vacation VALUES
  (14, 'Discovering the Alps for Families', 'Some Description14', 1500, strftime('%Y-%m-%d %H:%M:%f', 'now'),
   strftime('%Y-%m-%d %H:%M:%f', 'now'), 2, 2);
INSERT INTO Vacation VALUES (15, 'An extensive tour through the Deutsches Museum', 'Some Description15', 80,
                             strftime('%Y-%m-%d %H:%M:%f', 'now'), strftime('%Y-%m-%d %H:%M:%f', 'now'), 3, 3);


INSERT INTO Activity VALUES
  (1, 'Activity1', 'Activity description 1',0, strftime('%Y-%m-%d %H:%M:%f', 'now'), strftime('%Y-%m-%d %H:%M:%f', 'now'),
   1, 1);
INSERT INTO Activity VALUES
  (2, 'Activity2', 'Activity description 2', 25, strftime('%Y-%m-%d %H:%M:%f', 'now'), strftime('%Y-%m-%d %H:%M:%f', 'now'),
   2, 2);
INSERT INTO Activity VALUES
  (3, 'Activity3', 'Activity description 3', 6.5, strftime('%Y-%m-%d %H:%M:%f', 'now'), strftime('%Y-%m-%d %H:%M:%f', 'now'),
   3, 3);
INSERT INTO Activity VALUES
  (4, 'Activity4', 'Activity description 4', 12.9, strftime('%Y-%m-%d %H:%M:%f', 'now'), strftime('%Y-%m-%d %H:%M:%f', 'now'),
   4, 4);

INSERT INTO activitykeywords VALUES (1, 1);
INSERT INTO activitykeywords VALUES (1, 2);
INSERT INTO activitykeywords VALUES (1, 4);
INSERT INTO activitykeywords VALUES (1, 5);
INSERT INTO activitykeywords VALUES (1, 6);
INSERT INTO activitykeywords VALUES (2, 1);
INSERT INTO activitykeywords VALUES (2, 2);
INSERT INTO activitykeywords VALUES (2, 4);
INSERT INTO activitykeywords VALUES (2, 5);
INSERT INTO activitykeywords VALUES (2, 6);
INSERT INTO activitykeywords VALUES (3, 3);
INSERT INTO activitykeywords VALUES (4, 1);
INSERT INTO activitykeywords VALUES (4, 2);
INSERT INTO activitykeywords VALUES (4, 4);
INSERT INTO activitykeywords VALUES (4, 5);
INSERT INTO activitykeywords VALUES (4, 6);
INSERT INTO activitykeywords VALUES (4, 16);

INSERT INTO vacationkeywords VALUES (1, 1);
INSERT INTO vacationkeywords VALUES (1, 2);
INSERT INTO vacationkeywords VALUES (1, 4);
INSERT INTO vacationkeywords VALUES (1, 5);
INSERT INTO vacationkeywords VALUES (1, 6);
INSERT INTO vacationkeywords VALUES (2, 1);
INSERT INTO vacationkeywords VALUES (2, 2);
INSERT INTO vacationkeywords VALUES (2, 4);
INSERT INTO vacationkeywords VALUES (2, 5);
INSERT INTO vacationkeywords VALUES (2, 6);
INSERT INTO vacationkeywords VALUES (3, 3);
INSERT INTO vacationkeywords VALUES (4, 1);
INSERT INTO vacationkeywords VALUES (4, 2);
INSERT INTO vacationkeywords VALUES (4, 4);
INSERT INTO vacationkeywords VALUES (4, 5);
INSERT INTO vacationkeywords VALUES (4, 6);
INSERT INTO vacationkeywords VALUES (5, 7);
INSERT INTO vacationkeywords VALUES (6, 8);
INSERT INTO vacationkeywords VALUES (7, 9);
INSERT INTO vacationkeywords VALUES (8, 10);
INSERT INTO vacationkeywords VALUES (8, 11);
INSERT INTO vacationkeywords VALUES (8, 12);
INSERT INTO vacationkeywords VALUES (9, 11);
INSERT INTO vacationkeywords VALUES (9, 12);
INSERT INTO vacationkeywords VALUES (9, 13);
INSERT INTO vacationkeywords VALUES (10, 12);
INSERT INTO vacationkeywords VALUES (10, 13);
INSERT INTO vacationkeywords VALUES (10, 14);
INSERT INTO vacationkeywords VALUES (11, 13);
INSERT INTO vacationkeywords VALUES (11, 14);
INSERT INTO vacationkeywords VALUES (11, 15);
INSERT INTO vacationkeywords VALUES (12, 14);
INSERT INTO vacationkeywords VALUES (12, 15);
INSERT INTO vacationkeywords VALUES (12, 10);
INSERT INTO vacationkeywords VALUES (13, 15);
INSERT INTO vacationkeywords VALUES (13, 10);
INSERT INTO vacationkeywords VALUES (13, 11);
INSERT INTO vacationkeywords VALUES (14, 7);
INSERT INTO vacationkeywords VALUES (14, 10);
INSERT INTO vacationkeywords VALUES (14, 9);
INSERT INTO vacationkeywords VALUES (15, 13);
INSERT INTO vacationkeywords VALUES (15, 3);
INSERT INTO vacationkeywords VALUES (15, 9);

INSERT INTO vacationactivities VALUES (1, 1);
INSERT INTO vacationactivities VALUES (1, 2);
INSERT INTO vacationactivities VALUES (1, 4);
INSERT INTO vacationactivities VALUES (2, 1);
INSERT INTO vacationactivities VALUES (2, 2);
INSERT INTO vacationactivities VALUES (2, 4);
INSERT INTO vacationactivities VALUES (3, 3);
INSERT INTO vacationactivities VALUES (4, 1);
INSERT INTO vacationactivities VALUES (4, 2);
INSERT INTO vacationactivities VALUES (4, 4);

INSERT INTO activityreview VALUES (1, 1, 'review1', 'review description1', strftime('%Y-%m-%d %H:%M:%f', 'now'), 1, 0);
INSERT INTO activityreview VALUES (2, 1, 'review2', 'review description2', strftime('%Y-%m-%d %H:%M:%f', 'now'), 2, 2);
INSERT INTO activityreview VALUES (3, 1, 'review3', 'review description3', strftime('%Y-%m-%d %H:%M:%f', 'now'), 3, 4);
INSERT INTO activityreview VALUES (4, 2, 'review4', 'review description4', strftime('%Y-%m-%d %H:%M:%f', 'now'), 4, 3);
INSERT INTO activityreview VALUES (5, 2, 'review5', 'review description5', strftime('%Y-%m-%d %H:%M:%f', 'now'), 1, 2);
INSERT INTO activityreview VALUES (6, 2, 'review6', 'review description6', strftime('%Y-%m-%d %H:%M:%f', 'now'), 2, 4);
INSERT INTO activityreview VALUES (7, 3, 'review7', 'review description7', strftime('%Y-%m-%d %H:%M:%f', 'now'), 3, 3);
INSERT INTO activityreview VALUES (8, 4, 'review8', 'review description8', strftime('%Y-%m-%d %H:%M:%f', 'now'), 4, 1);
INSERT INTO activityreview VALUES (9, 4, 'review9', 'review description9', strftime('%Y-%m-%d %H:%M:%f', 'now'), 1, 4);
INSERT INTO activityreview
VALUES (10, 4, 'review10', 'review description10', strftime('%Y-%m-%d %H:%M:%f', 'now'), 2, 2);

INSERT INTO vacationreview
VALUES (11, 3, 'review11', 'review description11', strftime('%Y-%m-%d %H:%M:%f', 'now'), 3, 3);
INSERT INTO vacationreview
VALUES (12, 4, 'review12', 'review description12', strftime('%Y-%m-%d %H:%M:%f', 'now'), 4, 3);
INSERT INTO vacationreview
VALUES (13, 1, 'review13', 'review description13', strftime('%Y-%m-%d %H:%M:%f', 'now'), 1, 1);
INSERT INTO vacationreview
VALUES (14, 2, 'review14', 'review description14', strftime('%Y-%m-%d %H:%M:%f', 'now'), 2, 4);

INSERT INTO vacationimage VALUES (1, 'assets/images/1.jpg', 1);
INSERT INTO vacationimage VALUES (2, 'assets/images/2.jpg', 2);
INSERT INTO vacationimage VALUES (3, 'assets/images/3.jpg', 3);
INSERT INTO vacationimage VALUES (4, 'assets/images/4.jpg', 4);
INSERT INTO vacationimage VALUES (5, 'assets/images/5.jpg', 5);
INSERT INTO vacationimage VALUES (6, 'assets/images/6.jpg', 6);
INSERT INTO vacationimage VALUES (7, 'assets/images/7.jpg', 7);
INSERT INTO vacationimage VALUES (8, 'assets/images/8.jpg', 8);
INSERT INTO vacationimage VALUES (9, 'assets/images/9.jpg', 9);
INSERT INTO vacationimage VALUES (10, 'assets/images/10.jpg', 10);
INSERT INTO vacationimage VALUES (11, 'assets/images/11.jpg', 11);
INSERT INTO vacationimage VALUES (12, 'assets/images/12.jpg', 12);
INSERT INTO vacationimage VALUES (13, 'assets/images/13.jpg', 13);
INSERT INTO vacationimage VALUES (14, 'assets/images/14.jpg', 14);
INSERT INTO vacationimage VALUES (15, 'assets/images/15.jpg', 15);
INSERT INTO vacationimage VALUES (16, 'assets/images/1.jpg', 16);
INSERT INTO vacationimage VALUES (17, 'assets/images/2.jpg', 17);

INSERT INTO activityimage VALUES (1, 'assets/images/1.jpg', 1);
INSERT INTO activityimage VALUES (2, 'assets/images/2.jpg', 2);
INSERT INTO activityimage VALUES (3, 'assets/images/3.jpg', 3);
INSERT INTO activityimage VALUES (4, 'assets/images/4.jpg', 4);
# --- !Downs