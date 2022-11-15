import axios from "axios";
import { Degree } from "./types";

const getJobs = async () => {
  const baseUrl = process.env.VUE_APP_API_URL;
  const { data } = await axios.get<Degree[]>(`${baseUrl}/degrees`);
  return data;
};

export default getJobs;
