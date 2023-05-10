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
        const actual = wrapper.find(`[data-testid="invisible"]`).exists();
        const expected = false;
        expect(actual).toBe(expected);
      }
    );
    test(
      "Test of Screen in Button pushed",
      async () => {
        const wrapper = mount(App);
        await wrapper.get(`[data-testid="showButton"]`).trigger("click");
        const actual = wrapper.find(`[data-testid="invisible"]`).exists();
        const expected = true;
        expect(actual).toBe(expected);
      }
    );
  }
);
