export const decodeFixedBytes = (
  bytes: Uint8Array,
  lengths: number[],
  offset: number
): Uint8Array[] => {
  const arrayOfBytes: Uint8Array[] = [];

  for (const length of lengths) {
    const buffer = bytes.slice(offset, offset + length);

    arrayOfBytes.push(buffer);

    offset += length;
  }

  return arrayOfBytes;
};
