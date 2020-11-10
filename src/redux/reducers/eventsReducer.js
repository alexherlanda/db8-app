/**
 *  This app both ways of initializing Redux state.
 *  It has an initial state passed as the second argument of
 *  create store but each reducer has an initial state when there
 *  recive state as undefined.
 *
 */

import {
  LIST_EVENTS_REQUEST,
  LIST_EVENTS_SUCCESS,
  LIST_EVENTS_FAIL,
  POST_EVENT_REQUEST,
  POST_EVENT_SUCCESS,
  POST_EVENT_FAIL,
} from "../actions/eventsActions";

import { realEvents } from "../../models/events";

let initial = { events: { loading: false, data: [] } };

const eventsReducer = (state = initial, action) => {
  switch (action.type) {
    case LIST_EVENTS_REQUEST:
      return {
        ...state,
        eventsList: {
          ...state.eventsList,
          isLoading: true,
        },
      };

    case LIST_EVENTS_SUCCESS:
      return {
        ...state,
        eventsList: {
          isLoading: false,
          data: action.payload,
        },
      };

    case LIST_EVENTS_FAIL:
      return {
        ...state,
        eventsList: {
          isLoading: false,
          data: realEvents,
        },
      };

    case POST_EVENT_REQUEST:
      return {
        ...state,
        postingEvent: {
          isPosting: true,
        },
      };

    case POST_EVENT_SUCCESS:
    case POST_EVENT_FAIL:
      return {
        ...state,
        postingEvent: {
          isPosting: false,
        },
      };
    default:
      return state;
  }
};

export default eventsReducer;
