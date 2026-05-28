import { createSlice } from "@reduxjs/toolkit";
const users = [
  {
    id: 1,
    name: "John",
    email: "john@gmail.com",
    password: "1234",
    role: "admin",
  },
  {
    id: 2,
    name: "Amy",
    email: "amy@gmail.com",
    password: "1234",
    role: "user",
  },
];
const userSlice = createSlice({
  name: "user",
  initialState: { items: users, isLoggedIn: false },
  reducers: {
    login: (state, action) => {
      const found = state.items.find(
        (element) =>
          element.email === action.payload.email &&
          element.password === action.payload.password,
      );
      if (found) {
        state.isLoggedIn = true;
      }
    },
    register: (state, action) => {
      state.items.push(action.payload);
    },
    logout: () => {},
  },
});
export const { login, logout,register } = userSlice.actions;
export default userSlice.reducer;
