# --- !Ups
CREATE TABLE Location (
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	name	TEXT NOT NULL,
	description	TEXT NOT NULL,
  longitude REAL,
  latitude REAL,
  address TEXT,
  googleMapsLink TEXT
);

CREATE TABLE Keyword (
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	keyword	TEXT NOT NULL
);

CREATE TABLE Role (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  roleName TEXT NOT NULL
);

CREATE TABLE User (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  username TEXT NOT NULL,
  firstName TEXT,
  lastName TEXT,
  email TEXT,
  profilePicture TEXT,
  passwordHash TEXT,
  roleId INTEGER,
  locationId INTEGER,
  FOREIGN KEY (roleId) REFERENCES Role(id),
  FOREIGN KEY (locationId) REFERENCES Location(id)
);

CREATE TABLE Activity (
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	name	TEXT NOT NULL,
	description	TEXT NOT NULL,
  startTime DATE,
  endTime DATE,
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
  date DATE,
  userId INTEGER,
  rating TEXT,
  FOREIGN KEY(userId) REFERENCES User(id)
);

CREATE TABLE ActivityReviews (
  activityId INTEGER,
  reviewId INTEGER UNIQUE,
  FOREIGN KEY(activityId) REFERENCES Activity(id),
  FOREIGN KEY(reviewId) REFERENCES Review(id),
  PRIMARY KEY(activityId,reviewId)
);

CREATE TABLE Vacation (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  description TEXT,
  budget DECIMAL(5,2) NOT NULL,
  startDate DATE,
  endDate DATE,
  creatorId INTEGER,
  locationId INTEGER,
  FOREIGN KEY(creatorId) REFERENCES User(id),
  FOREIGN KEY(locationId) REFERENCES Location(id)
);

CREATE TABLE VacationKeywords (
  vacationId INTEGER,
  keywordId INTEGER,
  FOREIGN KEY(vacationId) REFERENCES Vacation(id),
  FOREIGN KEY(keywordId) REFERENCES Keyword(id),
  PRIMARY KEY(vacationId,keywordId)
);

CREATE TABLE VacationReviews (
  vacationId INTEGER,
  reviewId INTEGER UNIQUE,
  FOREIGN KEY(vacationId) REFERENCES Vacation(id),
  FOREIGN KEY(reviewId) REFERENCES Review(id),
  PRIMARY KEY(vacationId,reviewId)
);

CREATE TABLE VacationActivities (
  vacationId INTEGER,
  activityId INTEGER,
  FOREIGN KEY(vacationId) REFERENCES Vacation(id),
  FOREIGN KEY(activityId) REFERENCES Activity(id),
  PRIMARY KEY(vacationId,activityId)
);

CREATE TABLE Images (
  imageId INTEGER PRIMARY KEY AUTOINCREMENT,
  URL	TEXT NOT NULL
  );

CREATE TABLE VacationImages (
  vacationId INTEGER,
  imageId INTEGER,
  FOREIGN KEY(vacationId) REFERENCES Vacation(id),
  FOREIGN KEY(imageId) REFERENCES Images(imageId),
  PRIMARY KEY(imageId)
);

CREATE TABLE ActivityImages (
  activityId INTEGER,
  imageId INTEGER,
  FOREIGN KEY(activityId) REFERENCES Activity(id),
  FOREIGN KEY(imageId) REFERENCES Images(imageId),
  PRIMARY KEY(imageId)
);

# --- !Downs
DROP TABLE VacationActivities;
DROP TABLE VacationReviews;
DROP TABLE VacationKeywords;
DROP TABLE VacationImages;
DROP TABLE Vacation;
DROP TABLE ActivityReviews;
DROP TABLE ActivityKeywords;
DROP TABLE ActivityImages;
DROP TABLE Review;
DROP TABLE Activity;
DROP TABLE User;
DROP TABLE Role;
DROP TABLE Keyword;
DROP TABLE Location;
DROP TABLE Images;