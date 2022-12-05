export type Post = {
    userId: String,
    firstName: String
    lastName: String
    location: String,
    description: String,
    picturePath: String,
    userPicturePath: String,
    likes: Map<String, String>,
    comments: String[]
}

// export type comment = {
//     comment:String
// }

export type User = {
    userId:String
    firstName: String
    lastName: String
    email: String
    password: String
    picturePath: String
    friends: Number[]
    location: String,
    occupation: String,
    viewedProfile: Number,
    impressions: Number,
}

// export type images = {
//     image: string
// }