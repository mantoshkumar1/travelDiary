# --- !Ups
CREATE TABLE Location (
  id             INTEGER PRIMARY KEY AUTOINCREMENT,
  name           TEXT NOT NULL,
  description    TEXT NOT NULL,
  longitude      REAL,
  latitude       REAL,
  address        TEXT,
  googleMapsLink TEXT
);

CREATE TABLE Keyword (
  id      INTEGER PRIMARY KEY AUTOINCREMENT,
  keyword TEXT NOT NULL
);

CREATE TABLE Role (
  id       INTEGER PRIMARY KEY AUTOINCREMENT,
  roleName TEXT NOT NULL
);

CREATE TABLE User (
  id             INTEGER PRIMARY KEY AUTOINCREMENT,
  username       TEXT NOT NULL,
  firstName      TEXT NOT NULL,
  lastName       TEXT,
  email          TEXT NOT NULL,
  profilePicture TEXT,
  passwordHash   TEXT NOT NULL,
  roleId         INTEGER,
  locationId     INTEGER,
  FOREIGN KEY (roleId) REFERENCES Role (id),
  FOREIGN KEY (locationId) REFERENCES Location (id)
);

CREATE TABLE Activity (
  id          INTEGER PRIMARY KEY AUTOINCREMENT,
  name        TEXT NOT NULL,
  description TEXT NOT NULL,
  startTime   DATE,
  endTime     DATE,
  locationId  INTEGER,
  creatorId   INTEGER,
  FOREIGN KEY (locationId) REFERENCES Location (id),
  FOREIGN KEY (creatorId) REFERENCES User (id)
);

CREATE TABLE ActivityKeywords (
  activityId INTEGER,
  keywordId  INTEGER,
  FOREIGN KEY (activityId) REFERENCES Activity (id),
  FOREIGN KEY (keywordId) REFERENCES Keyword (id),
  PRIMARY KEY (activityId, keywordId)
);

CREATE TABLE ActivityReview (
  id          INTEGER PRIMARY KEY AUTOINCREMENT,
  activityId  INTEGER,
  title       TEXT NOT NULL,
  description TEXT NOT NULL,
  date        DATE,
  userId      INTEGER,
  rating      INTEGER,
  FOREIGN KEY (activityId) REFERENCES Activity (id),
  FOREIGN KEY (userId) REFERENCES User (id)
);

CREATE TABLE Vacation (
  id          INTEGER PRIMARY KEY AUTOINCREMENT,
  name        TEXT          NOT NULL,
  description TEXT,
  budget      DECIMAL(5, 2) NOT NULL,
  startDate   DATE,
  endDate     DATE,
  creatorId   INTEGER,
  locationId  INTEGER,
  FOREIGN KEY (creatorId) REFERENCES User (id),
  FOREIGN KEY (locationId) REFERENCES Location (id)
);

CREATE TABLE VacationKeywords (
  vacationId INTEGER,
  keywordId  INTEGER,
  FOREIGN KEY (vacationId) REFERENCES Vacation (id),
  FOREIGN KEY (keywordId) REFERENCES Keyword (id),
  PRIMARY KEY (vacationId, keywordId)
);

CREATE TABLE VacationReview (
  id          INTEGER PRIMARY KEY AUTOINCREMENT,
  vacationId  INTEGER,
  title       TEXT NOT NULL,
  description TEXT NOT NULL,
  date        DATE,
  userId      INTEGER,
  rating      INTEGER,
  FOREIGN KEY (vacationId) REFERENCES Vacation (id),
  FOREIGN KEY (userId) REFERENCES User (id)
);

CREATE TABLE VacationActivities (
  vacationId INTEGER,
  activityId INTEGER,
  FOREIGN KEY (vacationId) REFERENCES Vacation (id),
  FOREIGN KEY (activityId) REFERENCES Activity (id),
  PRIMARY KEY (vacationId, activityId)
);

CREATE TABLE VacationImage (
  id         INTEGER PRIMARY KEY AUTOINCREMENT,
  url        TEXT NOT NULL,
  vacationId INTEGER,
  FOREIGN KEY (vacationId) REFERENCES Vacation (id)
);

CREATE TABLE ActivityImage (
  id         INTEGER PRIMARY KEY AUTOINCREMENT,
  url        TEXT NOT NULL,
  activityId INTEGER,
  FOREIGN KEY (activityId) REFERENCES Activity (id)
);

# --- !Downs
DROP TABLE ActivityImage;
DROP TABLE VacationImage;
DROP TABLE VacationActivities;
DROP TABLE VacationReview;
DROP TABLE VacationKeywords;
DROP TABLE Vacation;
DROP TABLE ActivityReview;
DROP TABLE ActivityKeywords;;
DROP TABLE Activity;
DROP TABLE User;
DROP TABLE Role;
DROP TABLE Keyword;
DROP TABLE Location;