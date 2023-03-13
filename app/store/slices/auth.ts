import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface AuthState {
  step: number;
  endStep: number;
  character: string;
  form: object;
  isLogin: boolean;
};

const initialState = {
  step: 1,
  endStep: 3,
  character: '',
  form: {},
  isLogin: false
} as AuthState;

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setStep(state, action: PayloadAction<number>) {
      state.step = action.payload;
    },
    setCharacter(state, action: PayloadAction<string>) {
      state.character = action.payload;
    },
    setLoginStatus(state, action: PayloadAction<boolean>) {
      state.isLogin = action.payload;
    }
  }
});

export const { setStep, setCharacter, setLoginStatus } = authSlice.actions;
export default authSlice.reducer;