import { ethers } from "ethers";
import { decodeBytes } from "../decodeBytes";
import { InMemoryFile } from "./InMemoryFile";

export const decodeFile = (buffer: Uint8Array, bytesForFilePath: number, bytesForFileSize: number, offset: number): {
  file: InMemoryFile,
  encodedLength: number
} => {
  const [filePathBytes, fileBytes] = decodeBytes(buffer, [bytesForFilePath, bytesForFileSize], offset);

  return {
    file: {
      path: ethers.utils.toUtf8String(filePathBytes),
      content: fileBytes
    },
    encodedLength: bytesForFilePath + filePathBytes.byteLength + bytesForFileSize + fileBytes.byteLength
  };
};
