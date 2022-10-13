import { mount } from "@vue/test-utils";

import SubnavMenu from "@/components/Navigation/SubnavMenu.vue";

describe("SubnavMenu", () => {
  const createConfig = (routeName) => ({
    global: {
      mocks: {
        $route: {
          name: routeName,
        },
      },
      stubs: {
        FontAwesomeIcon: true,
      },
    },
  });
  describe("when user is on job page", () => {
    it("displays job count", () => {
      const wrapper = mount(SubnavMenu, createConfig("JobResults"));

      const jobCount = wrapper.find("[data-test='job-count']");

      expect(jobCount.exists()).toBe(true);
    });
  });

  describe("when user is not on job page", () => {
    it("displays job count", () => {
      const wrapper = mount(SubnavMenu, createConfig("Home"));

      const jobCount = wrapper.find("[data-test='job-count']");

      expect(jobCount.exists()).toBe(false);
    });
  });
});
