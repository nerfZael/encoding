import { decodeFiles } from "../files/decodeFiles";
import { encodeFiles } from "../files/encodeFiles";

describe("Files", () => {
  it("can encode and decode a file", async () => {
    const bytes = new Uint8Array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
 
    const encodedFiles = encodeFiles(
      [{
        path: "file.txt",
        content: bytes
      }],
      1,
      2
    );

    expect(
      decodeFiles(encodedFiles, 1, 2)
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
      1,
      2
    );

    expect(
      decodeFiles(encodedFiles, 1, 2)
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
