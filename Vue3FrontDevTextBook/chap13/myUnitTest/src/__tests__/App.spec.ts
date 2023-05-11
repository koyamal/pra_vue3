import {describe, test, expect} from "vitest";
import {mount} from "@vue/test-utils";
import App from "@/App.vue";
import OneMember from "@/components/OneMember.vue";

describe(
  "Test of App.vue",
  () => {
    test(
      "Test of Sum Points",
      () => {
        const options = {
          global: {
            stubs: {
              OneMember: true
            }
          }
        };
        const wrapper = mount(App, options);
        const actualText = wrapper.text();
        const expected = "Sum of Points: 88";
        expect(actualText).toContain(expected);
      }
    );
  }
);
