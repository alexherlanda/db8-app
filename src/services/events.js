import request from "./requests";
const path = "events";

export async function listEvents(params) {
  return request(path, {
    method: "GET",
    params: {
      ...params,
    },
  });
}

export async function postEvent(params) {
  return request(path, {
    method: "POST",
    data: params,
  });
}
