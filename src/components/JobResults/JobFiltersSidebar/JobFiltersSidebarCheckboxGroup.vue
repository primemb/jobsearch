<template>
  <accordion-comp :header="header">
    <div class="mt-5">
      <fieldset>
        <ul class="flex flex-row flex-wrap">
          <li
            v-for="value in uniqueValues"
            :key="value"
            class="w-1/2 h-8 flex flex-row justify-start items-center"
          >
            <input
              :id="value"
              v-model="selectedValues"
              :value="value"
              type="checkbox"
              class="mr-3"
              :data-test="value"
              @change="selectValue"
            />
            <label :for="value" data-test="value">{{ value }}</label>
          </li>
        </ul>
      </fieldset>
    </div>
  </accordion-comp>
</template>

<script lang="ts">
import { ref, defineComponent, PropType } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

import { key } from "@/store";

import AccordionComp from "@/components/Shared/AccordionComp.vue";
export default defineComponent({
  name: "JobFiltersSidebarCheckboxGroup",
  components: { AccordionComp },
  props: {
    header: {
      type: String,
      required: true,
    },
    uniqueValues: {
      type: [Array, Set] as PropType<string[] | Set<string>>,
      required: true,
    },
    mutation: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const store = useStore(key);
    const router = useRouter();

    const selectedValues = ref<string[]>([]);

    const selectValue = () => {
      store.commit(props.mutation, selectedValues.value);
      router.push({ name: "JobResults" });
    };

    return { selectedValues, selectValue };
  },
});
</script>
