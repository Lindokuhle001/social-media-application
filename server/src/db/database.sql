-- Active: 1670264099727@@127.0.0.1@5432@socialMediaDB
DROP TABLE IF EXISTS Friends
DROP TABLE IF EXISTS Users
DROP TABLE IF EXISTS Posts
DROP TABLE IF EXISTS Comments

CREATE TABLE IF NOT EXISTS Users(
    userId  varchar(50) NOT NULL PRIMARY KEY,
    firstName varchar(50) NOT NULL,
    lastName varchar(50) NOT NULL,
    email varchar(50) NOT NULL,
    password varchar(50) NOT NULL,
    picturePath varchar(50) NOT NULL,
    location varchar(50) NOT NULL,
    occupation varchar(50) NOT NULL,
    viewedProfile int NOT NULL,
    impressions int NOT NULL,
    createdAt date NOT NULL,
    updatedAt date NULL
    )

CREATE TABLE IF NOT EXISTS Friends(
    friendshipId  varchar(50) NOT NULL PRIMARY KEY,
    friendshipStatus varchar(50) NOT NULL,
    createdAt date NOT NULL,
    updatedAt date NULL,
    userId1 varchar(50),
    userId2 varchar(50),
    FOREIGN KEY (userId1) REFERENCES Users (userId),
    FOREIGN KEY (userId2) REFERENCES Users (userId)
    )


CREATE TABLE IF NOT EXISTS Posts(
    postId varchar(50) NOT NULL PRIMARY KEY,
    createdAt date NOT NULL,
    updatedAt date NULL,
    text varchar(150) NOT NULL,
    picturePath varchar(50) NOT NULL,
    userPicturePath varchar(50) NOT NULL,
    likes varchar(50) NOT NULL,
    userId varchar(50),
    FOREIGN KEY (userId) REFERENCES Users (userId)
    )

CREATE TABLE IF NOT EXISTS Comments(
    CommentsId varchar(50) NOT NULL PRIMARY KEY,
    createdAt date NOT NULL,
    likes varchar(50) NOT NULL,
    userId varchar(50),
    FOREIGN KEY (userId) REFERENCES Users (userId)
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