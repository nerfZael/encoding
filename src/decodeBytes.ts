import { BigNumber } from "ethers/lib/ethers";

export const decodeBytes = (
  bytes: Uint8Array,
  bytesForLength: number[],
  offset: number
): Uint8Array[] => {
  const arrayOfBytes: Uint8Array[] = [];

  for (const length of bytesForLength) {
    const encodedByteLength = bytes.slice(offset, offset + length);
    const byteLength = BigNumber.from(encodedByteLength).toNumber();

    const buffer = bytes.slice(offset + length, offset + length + byteLength);

    arrayOfBytes.push(buffer);

    offset += length + buffer.byteLength;
  }

  return arrayOfBytes;
};
