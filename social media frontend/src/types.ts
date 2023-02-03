
export type Post = {
    id: string;
    userId: String;
    firstName: String;
    lastName: String;
    location: String;
    description: String;
    picturePath: String;
    userPicturePath: String;
    likes: Map<String, String>;
    comments: String[];
  };
  
  export type User = {
    userId: String;
    firstName: String;
    lastName: String;
    email: String;
    password: String;
    picturePath: String;
    friends: any[];
    location: String;
    occupation: String;
    viewedProfile: Number;
    impressions: Number;
  };

  type PaletteMode = string 
  
  //fix type
  export type State = {
    mode: PaletteMode;
    user: User | null;
    token: string | null;
    posts: Post[];
  };