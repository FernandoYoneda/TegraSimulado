import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface UserState {
  data: UserData;
}

export interface UserData {
  id: string;
  email: string;
  admin: boolean;
}

const initialState: UserState = {
  data: { admin: false, email: "", id: "" },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<UserData>) => {
      state.data = { ...action.payload };
    },
  },
  extraReducers: (builder) => {},
});

export const { login } = userSlice.actions;

export const selectUser = (state: RootState) => state.user.data;
export const selectIsUserAdmin = (state: RootState) => state.user.data.admin;

export default userSlice.reducer;
