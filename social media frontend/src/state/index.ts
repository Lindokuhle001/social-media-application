import { createSlice } from "@reduxjs/toolkit";
import { State } from "../types";

const initialState: State = {
  mode: "light",
  user: null,
  token: null,
  posts: [],
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setMode: (state) => {
      if (state.mode === "light") {
        state.mode = "dark";
      } else {
        state.mode = "light";
      }
      // state.mode = state === 'light' ? 'dark' : 'light' //why is this not working
    },
    setLogin: (state: State, action) => {
      (state.user = action.payload.user), (state.token = action.payload.token);
    },
    setLogout: (state) => {
      (state.user = null), (state.token = null);
    },

    setFriends: (state: State, action) => {
      if (state.user) {
        state.user.friends = action.payload.friends;
      } else {
        console.error("no friends :(");
      }
    },
    setPosts: (state: State, action) => {
      state.posts = action.payload.user.posts;
    },
    setPost: (state: State, action) => {
      const updatedPosts = state.posts.map((post) => {
        if (post.id === action.payload.post_id) return action.payload.post;

        return post;
      });

      state.posts = updatedPosts;
    },

  },
});

export const {setLogin, setFriends, setLogout, setMode, setPost, setPosts} =authSlice.actions

export default authSlice.reducer