import { mount } from "@vue/test-utils";

import { useFilteredJobs } from "@/store/composables";
jest.mock("@/store/composables");
const useFilteredJobsMock = useFilteredJobs as jest.Mock;

import useConfirmRoute from "@/composables/useConfirmRoute";
jest.mock("@/composables/useConfirmRoute");
const useConfirmRouteMock = useConfirmRoute as jest.Mock;

import SubnavMenu from "@/components/Navigation/SubnavMenu.vue";

describe("SubnavMenu", () => {
  const createConfig = () => ({
    global: {
      stubs: {
        FontAwesomeIcon: true,
      },
    },
  });
  describe("when user is on job page", () => {
    it("displays job count", () => {
      useConfirmRouteMock.mockReturnValue(true);

      useFilteredJobsMock.mockReturnValue([{ id: 1 }, { id: 2 }]);

      const wrapper = mount(SubnavMenu, createConfig());

      const jobCount = wrapper.find("[data-test='job-count']");

      expect(jobCount.text()).toMatch("2 jobs matched");
    });
  });

  describe("when user is not on job page", () => {
    it("displays job count", () => {
      useConfirmRouteMock.mockReturnValue(false);

      useFilteredJobsMock.mockReturnValue([]);

      const wrapper = mount(SubnavMenu, createConfig());

      const jobCount = wrapper.find("[data-test='job-count']");

      expect(jobCount.exists()).toBe(false);
    });
  });
});
