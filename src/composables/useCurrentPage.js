import { computed } from "vue";
import { useRoute } from "vue-router";

const useCurrentPage = () => {
  const route = useRoute();

  const currentPage = computed(() => Number.parseInt(route.query.page || "1"));

  return currentPage;
};

export default useCurrentPage;
