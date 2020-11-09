import { call, put, throttle, takeLatest } from "redux-saga/effects";
import {
  POST_EVENT_REQUEST,
  postEventsSuccess,
  postEventsFail,
  LIST_EVENTS_REQUEST,
  listEventsSuccess,
  listEventsFail,
} from "../redux/actions/eventsActions";
import { listEvents, postEvent } from "../services/events";
import { notification } from "antd";

function* listEventsRequestAsyncOrchestrator(action) {
  const { payload } = action;
  try {
    const response = yield call(listEvents, payload);
    if (typeof response !== "undefined" && response.status === 200) {
      yield put(listEventsSuccess(response.data.results));
    } else {
      yield put(listEventsFail());
    }
  } catch (error) {
    yield put(listEventsFail());
    console.error("error", error);
  }
}

function* postEventRequestOrchestrator(action) {
  const { payload } = action;
  const { event } = payload;
  try {
    const response = yield call(postEvent, event);
    if (typeof response !== "undefined" && response.status === 200) {
      yield put(postEventsSuccess(response.data));
      notification.success({
        message: `El evento se registro exitosamente con el id ${response?.data?._id}`,
        description: ":D",
      });
    } else {
      yield put(postEventsFail());
    }
  } catch (error) {
    yield put(postEventsFail());
    console.error("error", error);
  }
}

/**
 *By using this helper won't start a new listEventsRequestAsyncOrchestrator task for 1500ms,
  but in the same time it will still be accepting the latest 
  LIST_EVENTS_REQUEST actions into its underlaying buffer, 
  so it'll miss all LIST_EVENTS_REQUEST actions happening in-between. 
   his ensures that the Saga will take at most one LIST_EVENTS_REQUEST action during each period
 */
export function* watchListEventsRequest() {
  yield throttle(5500, LIST_EVENTS_REQUEST, listEventsRequestAsyncOrchestrator);
}
export function* watchPostEventRequest() {
  yield takeLatest(POST_EVENT_REQUEST, postEventRequestOrchestrator);
}
