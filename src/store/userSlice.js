import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userServices from "../services/userService";

const initialState = {
  createUser: {},
};

const name = `user`;

export const fetchCreateUser = createAsyncThunk(
  `${name}/fetchCreateUser`,
  async (data) => {
    const res = await userServices.create(data);
    console.log("ress", res);
    return res;
  }
);

const userSlice = createSlice({
  name,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCreateUser.fulfilled, (state, action) => {
      state.createUser = action.payload;
    });
  },
});

export default userSlice;
