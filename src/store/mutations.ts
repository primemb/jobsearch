import {
  ADD_SELECTED_ORGANIZATIONS,
  LOGIN_USER,
  RECEIVE_JOBS,
  ADD_SELECTED_JOB_TYPES,
} from "./constants";

import { GlobalState } from "./types";
import { Job } from "@/api/types";

const mutations = {
  [LOGIN_USER](state: GlobalState) {
    state.isLoggedIn = true;
  },
  [RECEIVE_JOBS](state: GlobalState, jobs: Job[]) {
    state.jobs = jobs;
  },
  [ADD_SELECTED_ORGANIZATIONS](state: GlobalState, organizations: string[]) {
    state.selectedOrganizations = organizations;
  },
  [ADD_SELECTED_JOB_TYPES](state: GlobalState, jobTypes: string[]) {
    state.selectedJobTypes = jobTypes;
  },
};
export default mutations;
