import { POST_GET } from "@/const/constant";
import axios from "axios";

export const postAPIs = {
  getPaginatedPosts: async (page) => {
    const data = await axios({
      url: `${POST_GET}`,
      method: "GET",
    });
    return data.data;
  },
};
