import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { UserProfileType } from '@/types/user';

interface UserStateType {
  token: string | undefined;
  refreshToken: string | undefined;
  profile: UserProfileType | undefined;
}

const initialState: UserStateType = {
  token: undefined,
  refreshToken: undefined,
  profile: undefined,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<{ token: string; refreshToken: string }>) => {
      const { token, refreshToken } = action.payload;
      state.token = token;
      state.refreshToken = refreshToken;
    },
    setProfile(state, action) {
      const payload = action.payload;
      state.profile = {
        ...state.profile,
        ...payload,
      };
    },
  },
});

export const { setProfile, setToken } = userSlice.actions;
export default userSlice.reducer;
