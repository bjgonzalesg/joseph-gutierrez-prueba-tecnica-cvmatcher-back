export const addMinutesToDate = (date: Date, n: number): Date => {
  return new Date(date.setTime(date.getTime() + n * 60_000));
};
