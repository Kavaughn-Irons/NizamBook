CREATE database NIZAM;
USE NIZAM;
Create TABLE Profiles
(profile_id INT PRIMARY KEY, 
Image VARCHAR (256),
theName VARCHAR(256),
Email VARCHAR(256),
phoneNumber VARCHAR(256),
Location VARCHAR(256)

);

INSERT INTO profiles (theName, Email, phoneNumber) VALUES("kavaughn","kavaughnirons@outlook.com","216-512-5069");

delete from profiles where profile_id = 107;