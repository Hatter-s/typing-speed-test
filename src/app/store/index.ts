import { configureStore } from '@reduxjs/toolkit';
import { loadState, saveState } from '@/utils/localStorage';
import infoReducer, { initialState as initInfo } from '@/features/info/infoSlice';
import configReducer, {
  type Data as ConfigData,
  initialState as initConfig,
} from '@/features/config/configSlice';
import wordReducer from '@/features/word/wordSlice';

const persistedHighestWPM = loadState<number>('highestWPM');
const persistedConfig = loadState<ConfigData>('config');

export const store = configureStore({
  reducer: {
    info: infoReducer,
    config: configReducer,
    word: wordReducer,
  },
  preloadedState: {
    config:
      persistedConfig !== undefined && persistedConfig !== null
        ? { ...initConfig, data: persistedConfig }
        : initConfig,
    info:
      persistedHighestWPM !== undefined && persistedHighestWPM !== null
        ? { ...initInfo, data: { ...initInfo.data, highestWPM: persistedHighestWPM } }
        : initInfo,
  },
});

store.subscribe(() => {
  const state = store.getState();
  saveState('highestWPM', state.info.data?.highestWPM);
  saveState('config', state.config.data);
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
