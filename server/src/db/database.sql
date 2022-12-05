-- Active: 1670264099727@@127.0.0.1@5432@socialMediaDB
DROP TABLE IF EXISTS Friends
DROP TABLE IF EXISTS Users

CREATE TABLE IF NOT EXISTS Friends(
    FriendID SERIAL PRIMARY KEY,
    firstName varchar(50) NOT NULL,
    lastName varchar(50) NOT NULL,
    picturePath varchar(50) NOT NULL,
    location varchar(50) NOT NULL,
    occupation varchar(50) NOT NULL
    )

CREATE TABLE IF NOT EXISTS Users(
    ID SERIAL PRIMARY KEY,
    userId varchar(50) NOT NULL,
    firstName varchar(50) NOT NULL,
    lastName varchar(50) NOT NULL,
    email varchar(50) NOT NULL,
    password varchar(50) NOT NULL,
    picturePath varchar(50) NOT NULL,
    location varchar(50) NOT NULL,
    occupation varchar(50) NOT NULL,
    viewedProfile int NOT NULL,
    impressions int NOT NULL,
    friend varchar(50) NOT NULL
    )

-- ALTER TABLE Users 
--  ADD CONSTRAINT fk_friends
--     FOREIGN KEY (FriendID) 
--     REFERENCES Friends (FriendID)

CREATE TABLE IF NOT EXISTS Posts(
    ID SERIAL NOT NULL PRIMARY KEY,
    userIdvarchar FOREIGN KEY (ID) REFERENCES Users (ID),
    firstNamevarchar(50) NOT NULL,
    lastNamevarchar(50) NOT NULL,
    locationvarchar(50) NOT NULL,
    descriptionvarchar(50) NOT NULL,
    picturePathvarchar(50) NOT NULL,
    userPicturePathvarchar(50) NOT NULL,
    likes: varchar(50) NOT NULL,
    commentsvarchar(50) NOT NULL
    )




INSERT INTO Users(
    userId,
    firstName,
    lastName,
    email,
    password,
    picturePath,
    location,
    occupation,
    viewedProfile,
    impressions,
    friend

) VALUES(
    'rfsrtbtgb2334',
   'mlix',
    'shaba',
    'Mlixshaba@gmail.com',
    'password',
    'pic',
    'home',
    'work',
    3,
    1,
    'Friends'
)

INSERT INTO Friends(
    firstName,
    lastName,
    picturePath,
    location,
    occupation
) VALUES(
    'mlix',
    'shaba',
    'pic',
    'home',
    'work'
)