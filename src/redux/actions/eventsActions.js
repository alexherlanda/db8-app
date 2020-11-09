export const LIST_EVENTS_REQUEST = "LIST_EVENTS_REQUEST";
export const LIST_EVENTS_SUCCESS = "LIST_EVENTS_SUCCESS";
export const LIST_EVENTS_FAIL = "LIST_EVENTS_FAIL";

export const POST_EVENT_REQUEST = "POST_EVENT_REQUEST";
export const POST_EVENT_SUCCESS = "POST_EVENT_SUCCESS";
export const POST_EVENT_FAIL = "POST_EVENT_FAIL";

export const postEventsRequest = (payload) => ({
  type: POST_EVENT_REQUEST,
  payload: payload,
});

export const postEventsSuccess = (payload) => ({
  type: POST_EVENT_SUCCESS,
  payload: payload,
});

export const postEventsFail = (payload) => ({
  type: POST_EVENT_FAIL,
  payload: payload,
});

export const listEventsRequest = (payload) => ({
  type: LIST_EVENTS_REQUEST,
  payload: payload,
});

export const listEventsSuccess = (payload) => ({
  type: LIST_EVENTS_SUCCESS,
  payload: payload,
});

export const listEventsFail = (payload) => ({
  type: LIST_EVENTS_FAIL,
  payload: payload,
});
