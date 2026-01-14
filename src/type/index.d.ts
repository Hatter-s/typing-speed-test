export type ModeType = 'timed' | 'passage';
export type DifficultyType = 'easy' | 'medium' | 'hard';

export type TextId = `${DifficultyType}-${number}`;
export interface TypingItem {
  id: TextId;
  text: string;
}
export type TypingText = Record<DifficultyType, TypingItem[]>;

export interface Config<T> {
  title: string;
  id: T;
}

export interface SliceState<T> {
  data: T;
  status: 'idle' | 'loading' | 'failed' | 'success';
  error: string | null;
}
