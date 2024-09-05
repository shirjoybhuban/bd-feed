import { createSlice } from "@reduxjs/toolkit";
import { orderAPIs } from "./orderApi";
import { XHR_STATE } from "@/const/constant";

export const initialState = {
  getPaginatedOrders: {
    response: null,
    loading: XHR_STATE.ASLEEP,
    error: "",
  },
};

export const orderSlice = createSlice({
  name: "orderSlice",
  initialState,
  reducers: {
    getPaginatedOrdersStarts: (state, action) => {
      state.getPaginatedOrders.loading = XHR_STATE.IN_PROGRESS;
      state.getPaginatedOrders.error = "";
    },
    getPaginatedOrdersSuccess: (state, action) => {
      state.getPaginatedOrders.loading = XHR_STATE.COMPLETE;
      state.getPaginatedOrders.response = action.payload;
    },
    getPaginatedOrdersError: (state, action) => {
      state.getPaginatedOrders.loading = XHR_STATE.ASLEEP;
      state.getPaginatedOrders.error =
        action.payload && action.payload.message ? `${action.payload.message}` : Constants.DEFAULT_ERROR_TEXT;
    },
  },
});

export const ordersDispatcher = {
  getPaginatedOrders: (page, options) => async (dispatch) => {
    try {
      dispatch(getPaginatedOrdersStarts());
      const response = await orderAPIs.getPaginatedOrders(page);
      dispatch(getPaginatedOrdersSuccess(response));
      if (options && options.success) options.success(response);
    } catch (error) {
      console.error("error.response in getPaginatedOrders\n", error);
      dispatch(getPaginatedOrdersError((error.response && error.response.data) || null));
      if (options && options.error) options.error(error.response);
    }
  },
};

export const { getPaginatedOrdersStarts, getPaginatedOrdersSuccess, getPaginatedOrdersError } = orderSlice.actions;

export default orderSlice.reducer;
