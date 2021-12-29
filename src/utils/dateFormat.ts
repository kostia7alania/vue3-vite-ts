export const dateFormat = (dt: string): string => {
  const date = new Date(dt);
  if (String(date) === 'Invalid Date') return '';
  const yyyy = date.getFullYear();
  const mm = date.getMonth() + 1;
  const dd = date.getDate();

  return `${yyyy}-${dd}-${mm}`;
};
