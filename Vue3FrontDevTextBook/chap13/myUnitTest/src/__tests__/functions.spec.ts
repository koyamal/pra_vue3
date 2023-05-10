import {describe, test, expect} from "vitest";
import {divideTwoNums} from "@/functions";

describe(
  "Test of divideTwoNums() in functions.ts",
  () => {
    test(
      "Simple divide Test",
      () => {
        const num1 = 6;
        const num2 = 3;
        const actual = divideTwoNums(num1, num2);
        const expected = 2;
        expect(actual).toBe(expected);
      }
    );
  }
);
