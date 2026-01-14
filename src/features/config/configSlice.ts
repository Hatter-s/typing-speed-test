import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { SliceState, ModeType, DifficultyType } from '@/type';

export interface Data {
  mode: ModeType;
  difficulty: DifficultyType;
}

export const initialState: SliceState<Data> = {
  data: {
    mode: 'timed',
    difficulty: 'easy',
  },
  status: 'idle',
  error: null,
};

const configSlice = createSlice({
  name: 'config',
  initialState,
  reducers: {
    setMode: (state, action: PayloadAction<'timed' | 'passage'>) => {
      state.data.mode = action.payload;
    },
    setDifficulty: (state, action: PayloadAction<'easy' | 'medium' | 'hard'>) => {
      state.data.difficulty = action.payload;
    },
  },
});

export const { setMode, setDifficulty } = configSlice.actions;
export default configSlice.reducer;
