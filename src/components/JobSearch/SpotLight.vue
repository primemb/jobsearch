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

<script lang="ts">
import { ref, onMounted, defineComponent } from "vue";
import axios from "axios";

interface Spotlight {
  id: number;
  img: string;
  title: string;
  description: string;
}

export default defineComponent({
  name: "SpotLight",
  setup() {
    const spotlights = ref<Spotlight[]>([]);

    const getSpotLights = async () => {
      const baseUrl = process.env.VUE_APP_API_URL;
      const url = `${baseUrl}/spotlights`;
      const { data } = await axios.get<Spotlight[]>(url);
      spotlights.value = data;
    };

    onMounted(getSpotLights);

    return { spotlights };
  },
});
</script>
