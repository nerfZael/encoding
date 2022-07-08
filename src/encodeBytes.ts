import { ethers, BigNumber } from "ethers";
import { concat } from "ethers/lib/utils";

export const encodeBytes = (
  bytes: Uint8Array,
  bytesForLength: number
): Uint8Array => {
  const length = bytes.byteLength;
  const encodedLength = ethers.utils.zeroPad(
    ethers.utils.arrayify(BigNumber.from(length)),
    bytesForLength
  );

  const encodedBytes = concat([encodedLength, bytes]);

  return encodedBytes;
};
