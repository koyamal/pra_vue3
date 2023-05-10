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
        const actual = wrapper.get(`[data-testid="ans"]`).text();
        const expected = "2";
        expect(actual).toBe(expected);
      }
    );
    test(
      "Test of Screen in 8/2 Input",
      async () => {
        const wrapper = mount(App);
        await wrapper.get(`[data-testid="num1"]`).setValue(8);
        await wrapper.get(`[data-testid="num2"]`).setValue(2);
        const actual = wrapper.get(`[data-testid="ans"]`).text();
        const expected = "4";
        expect(actual).toBe(expected);
      }
    );
  }
);
