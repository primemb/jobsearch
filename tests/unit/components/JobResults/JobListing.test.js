import { mount, RouterLinkStub } from "@vue/test-utils";

import JobListing from "@/components/JobResults/JobListing.vue";

describe("JobListing", () => {
  const createJobProps = (jobProps = {}) => ({
    title: "Vue Developer",
    organization: "AirBnB",
    locations: ["Orlando"],
    ...jobProps,
  });

  const createConfig = (jobProps) => ({
    global: {
      stubs: {
        RouterLink: RouterLinkStub,
      },
    },
    props: {
      job: {
        ...jobProps,
      },
    },
  });

  it("renders job title", () => {
    const jobProps = createJobProps({ title: "Vue Programmer" });
    const wrapper = mount(JobListing, createConfig(jobProps));
    expect(wrapper.text()).toMatch("Vue Programmer");
  });

  it("renders job organization", () => {
    const jobProps = createJobProps({ organization: "AirBnB" });
    const wrapper = mount(JobListing, createConfig(jobProps));
    expect(wrapper.text()).toMatch("AirBnB");
  });

  it("renders job locations", () => {
    const jobProps = createJobProps({ locations: ["Orlando", "Jacksonvile"] });
    const wrapper = mount(JobListing, createConfig(jobProps));
    expect(wrapper.text()).toMatch("Orlando");
    expect(wrapper.text()).toMatch("Jacksonvile");
  });

  it("renders job qualifications", () => {
    const jobProps = createJobProps({
      minimumQualifications: ["Code", "Developed"],
    });
    const wrapper = mount(JobListing, createConfig(jobProps));
    expect(wrapper.text()).toMatch("Code");
    expect(wrapper.text()).toMatch("Developed");
  });

  it("links to individual job's page", () => {
    const jobProps = createJobProps({ id: 15 });
    const wrapper = mount(JobListing, createConfig(jobProps));
    const jobPageLink = wrapper.findComponent(RouterLinkStub);
    const toProp = jobPageLink.props("to");
    expect(toProp).toBe("/jobs/results/15");
  });
});
