import { hexlify } from "ethers/lib/utils";

export const bytesToString = (
  bytes: Uint8Array,
): string => {
  return hexlify(bytes);
};
