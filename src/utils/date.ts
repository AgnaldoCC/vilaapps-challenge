export const getDate = (someDate: string) => {
  const date = new Date(someDate);
  const day = date.getDate();
  const month = date.toLocaleDateString('default', { month: 'short' }).slice(0,-1);
  const year = date.getFullYear();
  return `${month} ${day}, ${year}`;
};

export const getDateDiffence = (someDate: string) => {
  const date = new Date(someDate);
  const _MS_PER_DAY = 1000 * 60 * 60 * 24;
  const today = new Date();
  const diffTime = date.getTime() - today.getTime();
  const diffDays = Math.ceil(diffTime / _MS_PER_DAY);
  return diffDays;
};