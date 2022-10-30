import { mount } from "@vue/test-utils";

import SubnavMenu from "@/components/Navigation/SubnavMenu.vue";

describe("SubnavMenu", () => {
  const createConfig = (routeName, $store = {}) => ({
    global: {
      mocks: {
        $route: {
          name: routeName,
        },
        $store,
      },
      stubs: {
        FontAwesomeIcon: true,
      },
    },
  });
  describe("when user is on job page", () => {
    it("displays job count", () => {
      const $store = {
        getters: {
          FILTERED_JOBS: [{ id: 1 }, { id: 2 }],
        },
      };
      const routeName = "JobResults";
      const wrapper = mount(SubnavMenu, createConfig(routeName, $store));

      const jobCount = wrapper.find("[data-test='job-count']");

      expect(jobCount.text()).toMatch("2 jobs matched");
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
