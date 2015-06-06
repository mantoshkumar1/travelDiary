# --- !Ups
CREATE TABLE Location (
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	name	TEXT NOT NULL,
	description	TEXT NOT NULL,
  longitude REAL,
  latitude REAL
);

CREATE TABLE Keyword (
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	keyword	TEXT NOT NULL
);

CREATE TABLE User (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  username TEXT NOT NULL,
  firstName TEXT,
  lastName TEXT,
  passwordHash TEXT
);

CREATE TABLE Activity (
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	name	TEXT NOT NULL,
	description	TEXT NOT NULL,
  startTime INTEGER,
  endTime INTEGER,
  locationId INTEGER,
  creatorId INTEGER,
  FOREIGN KEY(locationId) REFERENCES Location(id),
  FOREIGN KEY(creatorId) REFERENCES User(id)
);

CREATE TABLE ActivityKeywords (
	activityId INTEGER,
	keywordId INTEGER,
	FOREIGN KEY(activityId) REFERENCES Activity(id),
	FOREIGN KEY(keywordId) REFERENCES Keyword(id),
  PRIMARY KEY(activityId,keywordId)
);

CREATE TABLE Review (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title	TEXT NOT NULL,
  description TEXT NOT NULL,
  date INTEGER,
  userId INTEGER,
  FOREIGN KEY(userId) REFERENCES User(id)
);

CREATE TABLE ActivityReviews (
  activityId INTEGER,
  reviewId INTEGER UNIQUE,
  FOREIGN KEY(activityId) REFERENCES Activity(id),
  FOREIGN KEY(reviewId) REFERENCES Review(id),
  PRIMARY KEY(activityId,reviewId)
);

CREATE TABLE VacationReviews (
  vacationId INTEGER,
  reviewId INTEGER UNIQUE,
  FOREIGN KEY(vacationId) REFERENCES Activity(id),
  FOREIGN KEY(reviewId) REFERENCES Review(id),
  PRIMARY KEY(vacationId,reviewId)
);

# --- !Downs
DROP TABLE VacationReviews;
DROP TABLE ActivityReviews;
DROP TABLE Review;
DROP TABLE ActivityKeywords;
DROP TABLE Activity;
DROP TABLE User;
DROP TABLE Keyword;
DROP TABLE Location;