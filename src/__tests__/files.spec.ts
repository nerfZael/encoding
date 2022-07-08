import { concat } from "ethers/lib/utils";
import { decodeBytes } from "../decodeBytes";
import { encodeBytes } from "../encodeBytes";
import { decodeFiles } from "../files/decodeFiles";
import { encodeFiles } from "../files/encodeFiles";
import { generateArray } from "./utils.ts/generateArray";

describe("Files", () => {
  beforeAll(async () => {
  });

  afterAll(async () => {
  });

  it("can encode and decode a file", async () => {
    const bytes = new Uint8Array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
 
    const encodedFiles = encodeFiles(
      [{
        path: "file.txt",
        content: bytes
      }],
      1
    );

    expect(
      decodeFiles(encodedFiles, 1, 1)
    ).toEqual(
      [
        {
          path: "file.txt",
          content: bytes
        }
      ]
    );
  });

  it("can encode and decode multiple files", async () => {
    const bytes1 = new Uint8Array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    const bytes2 = new Uint8Array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
 
    const encodedFiles = encodeFiles(
      [
        {
          path: "file1.txt",
          content: bytes1
        },
        {
          path: "file2.txt",
          content: bytes2
        }
      ],
      1
    );

    expect(
      decodeFiles(encodedFiles, 1, 1)
    ).toEqual(
      [
        {
          path: "file1.txt",
          content: bytes1
        },
        {
          path: "file2.txt",
          content: bytes2
        }
      ]
    );
  });

});
