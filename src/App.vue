<template>
  <div>
    <main-nav />
    <router-view />
  </div>
</template>

<script lang="ts">
import MainNav from "@/components/Navigation/MainNav.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
  components: {
    MainNav,
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
