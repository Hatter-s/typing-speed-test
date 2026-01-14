export const loadState = <T>(key: string): T | undefined => {
  try {
    const valueString = localStorage.getItem(key);
    return valueString ? (JSON.parse(valueString) as T) : undefined;
  } catch {
    return undefined;
  }
};

export const saveState = (key: string, state: unknown) => {
  try {
    localStorage.setItem(key, JSON.stringify(state));
  } catch (error) {
    console.error(error);
  }
};
