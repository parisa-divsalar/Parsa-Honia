import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type Theme = 'light' | 'dark';

export interface CommonState {
  theme: Theme;
}

const initialState: CommonState = {
  theme: 'light',
};

const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<Theme>) => {
      state.theme = action.payload;
    },
  },
});

export const { setTheme } = commonSlice.actions;
export default commonSlice.reducer;
