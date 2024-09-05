import { XHR_STATE } from "@/const/constant";
import { createSlice } from "@reduxjs/toolkit";
import { postAPIs } from "./postApi";

export const initialState = {
  getPaginatedPosts: {
    response: null,
    loading: XHR_STATE.ASLEEP,
    error: "",
  },
};

export const postSlice = createSlice({
  name: "postSlice",
  initialState,
  reducers: {
    getPaginatedPostsStarts: (state, action) => {
      state.getPaginatedPosts.loading = XHR_STATE.IN_PROGRESS;
      state.getPaginatedPosts.error = "";
    },
    getPaginatedPostsSuccess: (state, action) => {
      state.getPaginatedPosts.loading = XHR_STATE.COMPLETE;
      console.log("action.payload", action.payload);

      state.getPaginatedPosts.response = {
        ...state.getPaginatedPosts.response,
        skip: action.payload.skip,
        limit: action.payload.limit,
        total: action.payload.total,
        posts:
          state.getPaginatedPosts.response == null
            ? action.payload.posts
            : [...state.getPaginatedPosts.response.posts, ...action.payload.posts],
      };
    },
    getPaginatedPostsError: (state, action) => {
      state.getPaginatedPosts.loading = XHR_STATE.ASLEEP;
      state.getPaginatedPosts.error =
        action.payload && action.payload.message ? `${action.payload.message}` : "Default Error Text From Const";
    },

    addPostToFront: (state, action) => {
      state.getPaginatedPosts.response = {
        ...state.getPaginatedPosts.response,
        posts:
          state.getPaginatedPosts.response == null
            ? [action.payload]
            : [action.payload, ...state.getPaginatedPosts.response.posts],
      };
    },
  },
});

export const postDispatcher = {
  getPaginatedPosts: (page, options) => async (dispatch) => {
    try {
      dispatch(getPaginatedPostsStarts());
      const response = await postAPIs.getPaginatedPosts(page);
      dispatch(getPaginatedPostsSuccess(response));
      if (options && options.success) options.success(response);
    } catch (error) {
      console.error("error.response in getPaginatedPosts\n", error);
      dispatch(getPaginatedPostsError((error.response && error.response.data) || null));
      if (options && options.error) options.error(error.response);
    }
  },
};

export const { getPaginatedPostsStarts, getPaginatedPostsSuccess, getPaginatedPostsError, addPostToFront } =
  postSlice.actions;

export default postSlice.reducer;
