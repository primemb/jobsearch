import { flushPromises, mount } from "@vue/test-utils";
import axios from "axios";
jest.mock("axios");

import SpotLight from "@/components/JobSearch/SpotLight.vue";

describe("SpotLight", () => {
  const mockSpotlightResponse = (data = {}) => {
    axios.get.mockResolvedValue({
      data: [
        {
          img: "Some image",
          title: "Some title",
          description: "Some Description",
          ...data,
        },
      ],
    });
  };

  it("provides img attribute to parent component", async () => {
    const data = { img: "Some image" };
    mockSpotlightResponse(data);
    const wrapper = mount(SpotLight, {
      slots: {
        default: `
          <template #defauult="slotProps">
            <h1>{{slotProps.img}}</h1>
          </template>
        `,
      },
    });
    await flushPromises();
    expect(wrapper.text()).toMatch("Some image");
  });

  it("provides title attribute to parent component", async () => {
    const data = { img: "Some title" };
    mockSpotlightResponse(data);
    const wrapper = mount(SpotLight, {
      slots: {
        default: `
          <template #defauult="slotProps">
            <h1>{{slotProps.title}}</h1>
          </template>
        `,
      },
    });
    await flushPromises();
    expect(wrapper.text()).toMatch("Some title");
  });
});
