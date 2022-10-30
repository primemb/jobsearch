<template>
  <accordion-comp header="Job Types">
    <div class="mt-5">
      <fieldset>
        <ul class="flex flex-row flex-wrap">
          <li
            v-for="jobType in UNIQUE_JOB_TYPES"
            :key="jobType"
            class="w-1/2 h-8"
          >
            <input
              :id="jobType"
              v-model="selectedJobTypes"
              :value="jobType"
              type="checkbox"
              class="mr-3"
              :data-test="jobType"
              @change="selectJobType"
            />
            <label data-test="job-type" :for="jobType">{{ jobType }}</label>
          </li>
        </ul>
      </fieldset>
    </div>
  </accordion-comp>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

import AccordionComp from "@/components/Shared/AccordionComp.vue";
import { ADD_SELECTED_JOB_TYPES, UNIQUE_JOB_TYPES } from "@/store/constants";
export default {
  name: "JobFiltersSidebarJobTypes",
  components: { AccordionComp },
  data() {
    return {
      selectedJobTypes: [],
    };
  },
  computed: {
    ...mapGetters([UNIQUE_JOB_TYPES]),
  },
  methods: {
    ...mapMutations([ADD_SELECTED_JOB_TYPES]),
    selectJobType() {
      this.ADD_SELECTED_JOB_TYPES(this.selectedJobTypes);
      this.$router.push({ name: "JobResults" });
    },
  },
};
</script>
