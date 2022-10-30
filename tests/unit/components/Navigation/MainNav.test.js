import { shallowMount, RouterLinkStub } from "@vue/test-utils";

import MainNav from "@/components/Navigation/MainNav.vue";

describe("MainNav", () => {
  const createConfig = ($store) => ({
    global: {
      mocks: {
        $store,
      },
      stubs: {
        RouterLink: RouterLinkStub,
      },
    },
  });

  it("display company name", () => {
    const $store = {
      state: { isLoggedIn: false },
    };
    const wrapper = shallowMount(MainNav, createConfig($store));
    expect(wrapper.text()).toMatch("Bobo Careers");
  });

  it("displays menu items for nvaigation", () => {
    const $store = {
      state: { isLoggedIn: false },
    };
    const wrapper = shallowMount(MainNav, createConfig($store));
    const navigationMenuItem = wrapper.findAll(
      "[data-test='main-nav-list-item']"
    );
    const navigationMenuTexts = navigationMenuItem.map((item) => item.text());
    expect(navigationMenuTexts).toEqual([
      "Teams",
      "Locations",
      "Life at Bobo",
      "How we hire",
      "Students",
      "Jobs",
    ]);
  });

  describe("when user is logged out", () => {
    it("prompts user to sign in", () => {
      const $store = {
        state: { isLoggedIn: false },
      };
      const wrapper = shallowMount(MainNav, createConfig($store));
      const loginButton = wrapper.find("[data-test='login-button']");
      expect(loginButton.exists()).toBe(true);
    });

    it("issues call to vuex to login user", async () => {
      const commit = jest.fn();
      const $store = {
        state: { isLoggedIn: false },
        commit,
      };
      const wrapper = shallowMount(MainNav, createConfig($store));
      const loginButton = wrapper.find("[data-test='login-button']");
      await loginButton.trigger("click");
      expect(commit).toHaveBeenCalledWith("LOGIN_USER");
    });
  });

  describe("when user is logged in", () => {
    it("displays user profile picture", async () => {
      const $store = {
        state: { isLoggedIn: true },
      };
      const wrapper = shallowMount(MainNav, createConfig($store));
      const profileImage = wrapper.find("[data-test='profile-image']");
      expect(profileImage.exists()).toBe(true);
    });

    it("displays subnavigation menu with additional information", async () => {
      const $store = {
        state: { isLoggedIn: true },
      };
      const wrapper = shallowMount(MainNav, createConfig($store));
      const subnav = wrapper.find("[data-test='subnav']");
      expect(subnav.exists()).toBe(true);
    });
  });
});
