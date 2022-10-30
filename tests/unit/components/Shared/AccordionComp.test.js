import { mount } from "@vue/test-utils";

import AccordionComp from "@/components/Shared/AccordionComp.vue";

describe("AccordionComp", () => {
  const createConfig = (config = {}) => ({
    global: {
      stubs: {
        "font-awesome-icon": true,
      },
    },
    props: {
      header: "Test Header",
    },
    slots: {
      default: "<h3>My nested child</h3>",
    },
    ...config,
  });

  it("renders child", async () => {
    const slots = {
      default: "<h3>My nested child</h3>",
    };
    const config = { slots };
    const wrapper = mount(AccordionComp, createConfig(config));
    expect(wrapper.text()).not.toMatch("My nested child");
    const clickableArea = wrapper.find("[data-test='clickable-area']");
    await clickableArea.trigger("click");
    expect(wrapper.text()).toMatch("My nested child");
  });

  describe("when we do not provide custom child content", () => {
    it("renders default content", async () => {
      const slots = {};
      const config = { slots };
      const wrapper = mount(AccordionComp, createConfig(config));
      const clickableArea = wrapper.find("[data-test='clickable-area']");
      await clickableArea.trigger("click");
      expect(wrapper.text()).toMatch("Whoops, somebody forgot to populate me!");
    });
  });
});
