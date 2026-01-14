import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { SliceState } from '@/type';
import { calAcc, calWPM } from './utils';

interface Data {
  highestWPM: number;
  wpm: number;
  accuracy: number;
  startTime: number;
}

const initialState: SliceState<Data> = {
  data: {
    highestWPM: 0,
    wpm: 0,
    accuracy: 100,
    startTime: 0,
  },
  status: 'idle',
  error: null,
};

const infoSlice = createSlice({
  name: 'info',
  initialState,
  reducers: {
    setHighestWPM: state => {
      state.data.highestWPM = Math.max(state.data.highestWPM, state.data.wpm);
    },
    setStartTime: (state, action: PayloadAction<number>) => {
      state.data.startTime = action.payload;
    },
    setWPM: (state, action: PayloadAction<{ chars: number; mis: number; time: number }>) => {
      const payload = action.payload;
      state.data.wpm = calWPM(payload.chars, payload.mis, payload.time);
    },
    setAcc: (state, action: PayloadAction<{ chars: number; correct: number }>) => {
      const payload = action.payload;
      state.data.accuracy = calAcc(payload.chars, payload.correct);
    },
    resetInfo: state => {
      state.data = {
        ...initialState.data,
        highestWPM: state.data.highestWPM,
      };
    },
  },
});

export const { setHighestWPM, setStartTime, setWPM, setAcc, resetInfo } = infoSlice.actions;
export default infoSlice.reducer;
