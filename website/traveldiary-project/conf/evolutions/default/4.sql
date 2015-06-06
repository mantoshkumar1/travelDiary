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

CREATE TABLE Activity (
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	name	TEXT NOT NULL,
	description	TEXT NOT NULL,
  startTime INTEGER,
  endTime INTEGER,
  locationId INTEGER,
  FOREIGN KEY(locationId) REFERENCES Location(id)
);

CREATE TABLE ActivityKeywords (
	activityId INTEGER,
	keywordId INTEGER,
	FOREIGN KEY(activityId) REFERENCES Activity(id),
	FOREIGN KEY(keywordId) REFERENCES Keyword(id),
  PRIMARY KEY(activityId,keywordId)
);

# --- !Downs
DROP TABLE ActivityKeywords;
DROP TABLE Activity;
DROP TABLE Keyword;
DROP TABLE Location;