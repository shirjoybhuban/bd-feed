// export const BASE_URL = "http://localhost:3000/api";
export const BASE_URL = "https://dummyjson.com";
export const ORDER_GET = `${BASE_URL}/orders`;
//export const POST_GET = `${BASE_URL}/posts`;
export const POST_GET = `${BASE_URL}/posts`;

export const XHR_STATE = Object.freeze({
  ASLEEP: "ASLEEP",
  IN_PROGRESS: "IN_PROGRESS",
  COMPLETE: "COMPLETE",
});