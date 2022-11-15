import axios from "axios";
jest.mock("axios");

const axiosGetMock = axios.get as jest.Mock;

import getDegrees from "@/api/getDegrees";

describe("getDegrees", () => {
  beforeEach(() => {
    axiosGetMock.mockResolvedValue({
      data: [{ id: 1, degree: "Master's" }],
    });
  });

  it("fetches all possible degree requirements", async () => {
    await getDegrees();
    expect(axios.get).toHaveBeenCalledWith("http://myfakeapi.com/degrees");
  });

  it("extracts degrees from response", async () => {
    const data = await getDegrees();
    expect(data).toEqual([{ id: 1, degree: "Master's" }]);
  });
});
