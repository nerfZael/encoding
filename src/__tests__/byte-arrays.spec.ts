import { concat } from "ethers/lib/utils";
import { decodeBytes } from "../decodeBytes";
import { encodeBytes } from "../encodeBytes";
import { generateArray } from "./utils.ts/generateArray";

describe("Byte arrays", () => {
  beforeAll(async () => {
  });

  afterAll(async () => {
  });
  it("can encode byte array", async () => {
    const bytes = new Uint8Array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
 
    expect(
      encodeBytes(bytes, 1)
    ).toEqual(new Uint8Array([10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

    expect(
      encodeBytes(bytes, 2)
    ).toEqual(new Uint8Array([0, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

    const longBytes = generateArray(256);
    expect(
      encodeBytes(longBytes, 2)
    ).toEqual(
      concat([
        new Uint8Array([1, 0]),
        longBytes
      ])
    );

    const veryLongBytes = generateArray(256 + 256 + 6);
    expect(
      encodeBytes(veryLongBytes, 2)
    ).toEqual(
      concat([
        new Uint8Array([2, 6]),
        veryLongBytes
      ])
    );
  });

  it("can decode single byte array", async () => {
    const bytes = new Uint8Array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

    expect(
      decodeBytes(
        encodeBytes(bytes, 1),
        [1], 
        0
      )
    ).toEqual([bytes]);

    expect(
      decodeBytes(
        encodeBytes(bytes, 2),
        [2], 
        0
      )
    ).toEqual([bytes]);

    const longBytes = generateArray(256);
  
    expect(
      decodeBytes(
        encodeBytes(longBytes, 2),
        [2], 
        0
      )
    ).toEqual([longBytes]);

    const veryLongBytes = generateArray(256 + 256 + 6);

    expect(
      decodeBytes(
        encodeBytes(veryLongBytes, 2),
        [2], 
        0
      )
    ).toEqual([veryLongBytes]);
  });
});
