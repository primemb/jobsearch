import { shallowMount } from "@vue/test-utils";
import JobFiltersSidebar from "@/components/JobResults/JobFiltersSidebar/JobFiltersSidebar.vue";

import {
  useUniqueJobTypes,
  useUniqueOrganizations,
  useUniqueDegrees,
} from "@/store/composables";
jest.mock("@/store/composables");
const useUniqueJobTypesMock = useUniqueJobTypes as jest.Mock;
const useUniqueOrganizationsMock = useUniqueOrganizations as jest.Mock;
const useUniqueDegreesMock = useUniqueDegrees as jest.Mock;

describe("JobFiltersSidebar", () => {
  it("allows user to filter jobs by job types", () => {
    useUniqueJobTypesMock.mockReturnValue(new Set(["Full-time", "Part-time"]));
    useUniqueOrganizationsMock.mockReturnValue(new Set(["Google"]));
    useUniqueDegreesMock.mockReturnValue(["Associate", "Bachelor's"]);
    const wrapper = shallowMount(JobFiltersSidebar);
    const jobTypesFilter = wrapper.findComponent(
      "[data-test='job-types-filter']"
    );
    //@ts-ignore
    const { header, uniqueValues, mutation } = jobTypesFilter.props();
    expect(header).toBe("Job Types");
    expect(uniqueValues).toEqual(new Set(["Full-time", "Part-time"]));
    expect(mutation).toBe("ADD_SELECTED_JOB_TYPES");
  });
  it("allows user to filter jobs by organizations", () => {
    useUniqueJobTypesMock.mockReturnValue(new Set(["Full-time", "Part-time"]));
    useUniqueOrganizationsMock.mockReturnValue(new Set(["Google"]));
    useUniqueDegreesMock.mockReturnValue(["Associate", "Bachelor's"]);
    const wrapper = shallowMount(JobFiltersSidebar);
    const organizationsFilter = wrapper.findComponent(
      "[data-test='organizations-filter']"
    );
    //@ts-ignore
    const { header, uniqueValues, mutation } = organizationsFilter.props();
    expect(header).toBe("Organizations");
    expect(uniqueValues).toEqual(new Set(["Google"]));
    expect(mutation).toBe("ADD_SELECTED_ORGANIZATIONS");
  });
  it("allows user to filter jobs by Degrees", () => {
    useUniqueJobTypesMock.mockReturnValue(new Set(["Full-time", "Part-time"]));
    useUniqueOrganizationsMock.mockReturnValue(new Set(["Google"]));
    useUniqueDegreesMock.mockReturnValue(["Associate", "Bachelor's"]);
    const wrapper = shallowMount(JobFiltersSidebar);
    const degreesFilter = wrapper.findComponent("[data-test='degrees-filter']");
    //@ts-ignore
    const { header, uniqueValues, mutation } = degreesFilter.props();
    expect(header).toBe("Degrees");
    expect(uniqueValues).toEqual(["Associate", "Bachelor's"]);
    expect(mutation).toBe("ADD_SELECTED_DEGREES");
  });
});
