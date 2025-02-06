import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userServices from "../services/userService";

const initialState = {
  users: [],
  createUser: {},
  userDetail: {},
};

const name = `user`;

export const fetchGetAllUser = createAsyncThunk(
  `${name}/fetchGetAllUser`,
  async () => {
    const res = await userServices.getAll();
    console.log("res", res);

    return res.data.user;
  }
);

export const fetchCreateUser = createAsyncThunk(
  `${name}/fetchCreateUser`,
  async (data) => {
    const res = await userServices.create(data);
    console.log("ress", res);
    return res.data.user;
  }
);

export const fetchUserDetail = createAsyncThunk(
  `${name}/fetchUserDetail`,
  async (id) => {
    const res = await userServices.getDetail(id);
    return res.data.data;
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
    builder.addCase(fetchGetAllUser.fulfilled, (state, action) => {
      state.users = action.payload;
    });
    builder.addCase(fetchUserDetail.fulfilled, (state, action) => {
      state.userDetail = action.payload;
    });
  },
});

export default userSlice.reducer;
