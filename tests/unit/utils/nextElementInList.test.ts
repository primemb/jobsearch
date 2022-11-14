import nextElementInList from "@/utils/nextElementInList";

describe("nextElementInList", () => {
  it("locates elements in list and returns next element in list", () => {
    const list = ["A", "B", "C", "D", "E"];
    const value = "C";
    const result = nextElementInList<string>(list, value);
    expect(result).toBe("D");
  });
});
