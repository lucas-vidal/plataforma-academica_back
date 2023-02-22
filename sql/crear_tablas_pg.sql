CREATE TABLE users (
dni INT NOT NULL PRIMARY KEY,
name VARCHAR(50) NOT NULL,
surname VARCHAR(50) NOT NULL,
date_of_brith DATE NOT NULL,
date_of_admission DATE,
career INT NOT NULL,
password VARCHAR(20) NOT NULL,
teacher BOOLEAN NOT NULL,
admin BOOLEAN NOT NULL
);

CREATE TABLE courses (
code INT NOT NULL PRIMARY KEY,
name VARCHAR(50) NOT NULL,
career INT NOT NULL,
season INT NOT NULL,
teacher INT NOT NULL,
date_test1 DATE NOT NULL,
date_test2 DATE NOT NULL,
date_test3 DATE NOT NULL,
date_test4 DATE NOT NULL,
date_ap1 DATE NOT NULL,
date_ap2 DATE NOT NULL,
date_ap3 DATE NOT NULL,
date_ap4 DATE NOT NULL
);

CREATE TABLE qualifications (
id SERIAL PRIMARY KEY,
code INT NOT NULL,
dni INT NOT NULL,
qual_1 INT,
qual_2 INT,
qual_3 INT,
qual_4 INT,
ap1 INT,
ap2 INT,
ap3 INT,
ap4 INT,
give_ap1 BOOLEAN,
give_ap2 BOOLEAN,
give_ap3 BOOLEAN,
give_ap4 BOOLEAN
);

CREATE TABLE enrollment (
id SERIAL PRIMARY KEY,
code INT NOT NULL,
dni INT NOT NULL
); 

CREATE TABLE notifications (
id SERIAL PRIMARY KEY,
datatime DATE NOT NULL,
subject TEXT NOT NULL,
from_dni INT NOT NULL,
to_dni INT NOT NULL,
message TEXT NOT NULL
); 

CREATE TABLE careers (
code INT NOT NULL PRIMARY KEY,
name VARCHAR(50) NOT NULL
);