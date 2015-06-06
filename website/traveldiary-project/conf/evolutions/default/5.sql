# --- !Ups
CREATE TABLE Activity (
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	name	TEXT NOT NULL,
	description	TEXT NOT NULL,
  startTime INTEGER,
  endTime INTEGER,
  locationId INTEGER,
  FOREIGN KEY(locationId) REFERENCES Location(id)
);

# --- !Downs
DROP TABLE Activity