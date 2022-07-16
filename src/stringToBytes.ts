import { arrayify, hexlify } from "ethers/lib/utils";

export const stringToBytes = (
  str: string,
): Uint8Array => {
  return arrayify(str);
};
