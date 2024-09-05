import { ORDER_GET } from "@/const/constant";
import axios from "axios";

export const orderAPIs = {
  getPaginatedOrders: async (page) => {
    const data = await axios({
      url: `${ORDER_GET}?page=${page}`,
      method: "GET",
    });
    return data.data;
  },
};
