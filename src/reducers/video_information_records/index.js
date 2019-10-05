import { actionTypes } from "../../actions/video_information_records";
import initialState from "./initial_state.js";

const get_next_id = records => Math.max(Object.keys(records)) + 1;

export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.CREATE_VIDEO_INFORMATION_RECORD: {
      const { video_information_records } = state;

      state = {
        ...state,
        video_information_records: {
          ...video_information_records,
          [get_next_id(video_information_records)]: {
            ...action.payload.attributes
          }
        }
      };
    }

    case actionTypes.UPDATE_VIDEO_INFORMATION_RECORD: {
      state = {
        ...state,
        video_information_records: {
          ...state.video_information_records,
          [action.payload.id]: {
            ...action.payload.attributes
          }
        }
      };
    }

    case actionTypes.DELETE_VIDEO_INFORMATION_RECORD: {
      state = {
        ...state,
        video_information_records: state.video_information_records.filter(({ id }) => id !== action.payload.id)
      };
    }
  }
  return state;
}
