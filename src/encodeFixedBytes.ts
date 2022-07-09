import { ethers } from "ethers";

export const encodeFixedBytes = (
  arrayOfBytes: Uint8Array[],
  lengths: number[]
): Uint8Array => {
  const allEncodedBytes: Uint8Array = new Uint8Array(
    lengths.reduce((acc, curr) => acc + curr, 0)
  );

  let offset = 0;

  for(let i = 0; i < lengths.length; i++) {
    const encodedBytes = ethers.utils.zeroPad(
      arrayOfBytes[i],
      lengths[i]
    );

    allEncodedBytes.set(encodedBytes, offset);
    offset += lengths[i];
  }
  
  return allEncodedBytes;
};
