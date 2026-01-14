import type { TextId } from '@/type';

export const isValidId = (id: string): id is TextId => {
  return /^(easy|medium|hard)-\d+$/.test(id);
};
