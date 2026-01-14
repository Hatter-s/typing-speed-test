export const calWPM = (chars: number, mis: number, time: number) => {
  const timeMinute = time / 60;
  const words = (chars - mis) / 5;
  return Math.round(words / timeMinute);
};

export const calAcc = (chars: number, correct: number) => {
  return Math.round((correct / chars) * 100);
};
