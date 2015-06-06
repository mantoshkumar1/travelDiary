# --- !Ups
CREATE TABLE Location (
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	name	TEXT NOT NULL,
	description	TEXT NOT NULL,
  longitude DOUBLE,
  endTime DOUBLE
);

# --- !Downs
DROP TABLE Activity