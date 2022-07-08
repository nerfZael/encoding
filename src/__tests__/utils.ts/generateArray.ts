export const generateArray = (length: number): Uint8Array => {
  const array = new Uint8Array(length);
  for(let i = 1; i <= length; i++) {
    array[i] = i;
  }
  return array;
};
