import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    firstName: "",
    lastName: "",
    userName: "",
    token: "",
  },
  reducers: {
    logout: (state) => {
      state.firstName = "";
      state.lastName = "";
      state.userName = "";
      state.token = "";
    },
    updateUser: (state, action) => {
      state.firstName = action.payload.userDatas.firstName;
      state.lastName = action.payload.userDatas.lastName;
      state.userName = action.payload.userDatas.userName;
      if (action.payload.userDatas.token) {
        state.token = action.payload.userDatas.token;
      }
    },
  },
});

export default userSlice.reducer;
