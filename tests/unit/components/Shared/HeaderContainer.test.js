import { mount } from "@vue/test-utils";

import HeaderContainer from "@/components/Shared/HeaderContainer.vue";

describe("HeaderContainer", () => {
  it("allows parent component to provide title content", () => {
    const wrapper = mount(HeaderContainer, {
      slots: {
        title: "<h2>Some title</h2>",
      },
    });

    expect(wrapper.text()).toMatch("Some title");
  });

  it("allow parent component to provide subtitle content", () => {
    const wrapper = mount(HeaderContainer, {
      slots: {
        subtitle: "<h2>Some subtitle</h2>",
      },
    });

    expect(wrapper.text()).toMatch("Some subtitle");
  });
});
