<template>
  <ul>
    <li v-for="spotlight in spotlights" :key="spotlight.id">
      <slot
        :img="spotlight.img"
        :title="spotlight.title"
        :description="spotlight.description"
      ></slot>
    </li>
  </ul>
</template>

<script>
import { ref, onMounted } from "vue";
import axios from "axios";

export default {
  name: "SpotLight",
  setup() {
    const spotlights = ref([]);

    const getSpotLights = async () => {
      const baseUrl = process.env.VUE_APP_API_URL;
      const url = `${baseUrl}/spotlights`;
      const { data } = await axios.get(url);
      spotlights.value = data;
    };

    onMounted(getSpotLights);

    return { spotlights };
  },
};
</script>
