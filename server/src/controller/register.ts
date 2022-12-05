import bycrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { User } from '../db/model/index'
import { addUser } from '../db/pg/user'
import { v4 as uuidv4 } from 'uuid';

const getUUID = () => uuidv4();

 const register = (firstName: User['firstName'],
    lastName: User['lastName'],
    email: User['email'],
    password: User['password'],
    picturePath: User['picturePath'],
    friends: User['friends'],
    location: User['location'],
    occupation: User['occupation']
) => {

    const user: User = {
        userId: getUUID(),
        firstName,
        lastName,
        email,
        password,
        picturePath,
        friends,
        location,
        occupation,
        viewedProfile: 0,
        impressions: 0
    }

    addUser(user) 
}

export default register