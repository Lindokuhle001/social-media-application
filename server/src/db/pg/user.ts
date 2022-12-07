import pool from "../index";
import { User } from "../model/index";

const getUsers = async () => {
  const { rows } = await pool.query(
    "SELECT firstName, lastName, email, password, picturePath, friend, location, occupation, viewedProfile, impressions FROM Users"
  );
  return rows;
};

const addUser = async (user: User) => {
  const {
    userId,
    firstName,
    lastName,
    email,
    password,
    picturePath,
    friends,
    location,
    occupation,
    viewedProfile,
    impressions,
  } = user;
  const result = await pool.query(
    "INSERT INTO Users(userId, firstName, lastName, email, password, picturePath, friend, location, occupation, viewedProfile, impressions) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11) RETURNING *",
    [
      userId,
      firstName,
      lastName,
      email,
      password,
      picturePath,
      friends,
      location,
      occupation,
      viewedProfile,
      impressions,
    ]
  );

  return result.rows;
};

// const getTodo = async (todoID: Todo['todoID']) => {
//     const result = await pool.query('SELECT todoID, title, todoStatus FROM Todos WHERE todoID=$1', [todoID]);
//     return result.rows
// }

// const deleteTodo = async (todoID: string) => {
//     const result = await pool.query('DELETE FROM Todos WHERE todoID=$1', [todoID]);
//     return result.rows
// }

// const updateTodo = async (todo: Todo) => {
//     const { todoID, title, todoStatus } = todo
//     const result = await pool.query('UPDATE Todos SET title= $2, todoStatus=$3 WHERE todoID=$1', [todoID, title, todoStatus]);
//     return result.rows
// }

export { addUser };
