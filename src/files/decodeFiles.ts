import { InMemoryFile } from "@nerfzael/memory-fs";
import { decodeFile } from "./decodeFile";

export const decodeFiles = (buffer: Uint8Array, bytesForFilePath: number, bytesForFileSize: number): InMemoryFile[] => {
  const files: InMemoryFile[] = [];
  let offset = 0;
  while(offset < buffer.byteLength) {
    const { 
      file,
      encodedLength
    } = decodeFile(buffer, bytesForFilePath, bytesForFileSize, offset);

    files.push(file);

    offset += encodedLength;
  }

  return files;
};