import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "@/util/http";
import { AxiosRes, ResData } from "@/util/type";
import staticMethods from "antd/es/message";
import { RootState } from "..";
export type MenuData = {
  hasMenu: boolean;
  key: string;
  label: string;
  path: string;
};
export type UserData = {
  name: string;
  vChat: string;
  phone: string;
  avatar: string;
  graduation_time: Date;
  money: number;
  role: string;
  has_person_info: boolean;
  topic_role: [];
};

type Data = {
  menu: MenuData[];
  user_info: Partial<UserData>;
};
const initialState: Data = {
  menu: [],
  user_info: {},
};
export const get_menu_async = createAsyncThunk<MenuData[]>(
  "get/user_menu",
  async (action, state) => {
    const res:any = await axios.get("/api/user/menu");
    return res.data.data;
  }
);
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    set_menu: (state, action) => {
      state.menu = action.payload;
    },
    set_user_info: (state, action) => {
      state.user_info = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(get_menu_async.fulfilled, (state, res) => {
      state.menu = res.payload;
    });
  },
});
export const select_menu = (state: RootState) => {
  return state.user.menu;
};
export const select_user_info = (state: RootState) => {
  return state.user.user_info;
};
export default userSlice.reducer;
