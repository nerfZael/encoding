import { ethers } from "ethers";
import { concat } from "ethers/lib/utils";
import { encodeBytes } from "../encodeBytes";
import { InMemoryFile } from "./InMemoryFile";

export const encodeFiles = (files: InMemoryFile[], bytesForFileSize: number): Uint8Array => {
  let array: Uint8Array = new Uint8Array();
  for(const file of files) {
    if(!file.content) {
      continue;
    }

    const filePathBytes = ethers.utils.toUtf8Bytes(file.path);
    const fileBytes = new Uint8Array(file.content);

    array = concat([
      array,
      encodeBytes(filePathBytes, bytesForFileSize),
      encodeBytes(fileBytes, bytesForFileSize)
    ]);
  }

  return new Uint8Array(array);
};
