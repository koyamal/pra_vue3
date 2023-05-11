import {describe, test, expect} from "vitest";
import {mount} from "@vue/test-utils";
import OneMember from "@/components/OneMember.vue";

describe(
  "Test of OneMember",
  () => {
    test(
      "Test in Exist note value",
      () => {
        const propsData = {
          id: 22458,
          name: "Saburo",
          email: "sabu@example.com",
          points: 200,
          note: "Good",
        };
        const wrapper = mount(OneMember, {props: propsData});
        const actualText = wrapper.text();
        expect(actualText).toContain(String(propsData.id));
        expect(actualText).toContain(propsData.name);
        expect(actualText).toContain(propsData.email);
        expect(actualText).toContain(String(propsData.points));
        expect(actualText).toContain(propsData.note);
      }
    );
    test(
      "Test in Not Exist note value",
      () => {
        const propsData = {
          id: 53632,
          name: "Shiro",
          email: "shiro@example.com",
          points: 123,
        };
        const wrapper = mount(OneMember, {props: propsData});
        const actualText = wrapper.text();
        expect(actualText).toContain(String(propsData.id));
        expect(actualText).toContain(propsData.name);
        expect(actualText).toContain(propsData.email);
        expect(actualText).toContain(String(propsData.points));
        expect(actualText).toContain("--");
      }
    );
  }
);
