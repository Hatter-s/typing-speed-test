import { createSlice, createAsyncThunk, type PayloadAction } from '@reduxjs/toolkit';
import type { DifficultyType, SliceState, TypingItem } from '@/type';

import { getErrorMessage } from '@/utils/error';

export interface Data {
  isActive: boolean;
  targetText: string;
  cursorIndex: number; //* start at 0
  charsStatus: (1 | 0)[]; //* use like stack charStatus will have 2 state 1 (right) and 0 (wrong)
  mistake: number;
}

export const initialState: SliceState<Data> = {
  data: {
    isActive: false,
    targetText: '',
    cursorIndex: 0,
    charsStatus: [],
    mistake: 0,
  },
  status: 'idle',
  error: null,
};

export const fetchTypingText = createAsyncThunk<
  TypingItem[],
  DifficultyType,
  { rejectValue: string }
>('word/fetchText', async (difficulty, { rejectWithValue }) => {
  try {
    const response = await fetch(`/data.json`);

    if (!response.ok) throw new Error('Failed to fetch');

    const data = await response.json();

    if (!data[difficulty] || !Array.isArray(data[difficulty]))
      throw new Error('Invalid format: Expected an array of texts');

    return data[difficulty] as TypingItem[];
  } catch (err) {
    return rejectWithValue(getErrorMessage(err));
  }
});

const wordSlice = createSlice({
  name: 'word',
  initialState,
  reducers: {
    typeChar: (state, action: PayloadAction<string>) => {
      const curChar = state.data.targetText[state.data.cursorIndex];
      if (action.payload === curChar) {
        state.data.charsStatus.push(1);
      } else if (curChar === '—') {
        // handle em-dash
        // Allow En-dash to match Em-dash?
        if (action.payload === '–') {
          state.data.charsStatus.push(1);
        }

        // Optional: You might also want to allow standard Hyphen '-'
        if (action.payload === '-') {
          state.data.charsStatus.push(1);
        } else {
          state.data.charsStatus.push(0);
        }
      } else {
        state.data.charsStatus.push(0);
      }

      if (state.data.charsStatus.at(-1) === 0) {
        state.data.mistake += 1;
      }

      state.data.cursorIndex += 1;
    },
    deleteChar: state => {
      if (state.data.charsStatus.length !== 0) {
        const delStatus = state.data.charsStatus.pop();
        state.data.cursorIndex -= 1;
        if (delStatus === 0) {
          state.data.mistake -= 1;
        }
      }
    },
    activateTyping: state => {
      state.data.isActive = true;
    },
    deactivateTyping: state => {
      state.data.isActive = false;
    },
    resetInfo: state => {
      state.data = { ...state.data, charsStatus: [], isActive: false, cursorIndex: 0, mistake: 0 };
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchTypingText.pending, state => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchTypingText.fulfilled, (state, action) => {
        state.status = 'success';
        state.error = null;

        const pool = action.payload;
        if (pool.length > 0) {
          const radomItem = pool[Math.floor(Math.random() * pool.length)];
          state.data.targetText = radomItem.text;
        }
      })
      .addCase(fetchTypingText.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      });
  },
});

export const { typeChar, deleteChar, activateTyping, deactivateTyping, resetInfo } =
  wordSlice.actions;
export default wordSlice.reducer;
