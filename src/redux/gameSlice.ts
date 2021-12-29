import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface GameControl {
  level: number
  verifyStatus: string;
}

const initialState: GameControl = {
  level: 1,
  verifyStatus: "",
}

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    updateLevel: (state, action: PayloadAction<number>) => {
      state.level = action.payload
    },
    updateVerifyStatus: (state, action: PayloadAction<string>) => {
      state.verifyStatus = action.payload
    },
  },
})

export const { updateLevel, updateVerifyStatus } = gameSlice.actions

export const gameReducer = gameSlice.reducer