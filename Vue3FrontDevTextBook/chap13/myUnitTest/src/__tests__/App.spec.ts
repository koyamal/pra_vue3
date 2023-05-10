import {describe, test, expect} from "vitest";
import {mount} from "@vue/test-utils";
import App from "@/App.vue";

describe(
  "Test of App.vue",
  () => {
    test(
      "Test of Screen in Initial Input",
      () => {
        const wrapper = mount(App);
        const actual = wrapper.get("p").text();
        const expected = "6 / 3 = 2";
        expect(actual).toBe(expected);
      }
    );
  }
);
