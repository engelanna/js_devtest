import { actionTypes } from "../../actions/video_information_records";
import initialState from "./initial_state.js";

export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.CREATE_VIDEO_INFORMATION_RECORD: {
      const { id, content } = action.payload;
      return {
        ...state,
        allIds: [...state.allIds, id],
        byIds: {
          ...state.byIds,
          [id]: {
            content,
            completed: false
          }
        }
      };
    }
    case actionTypes.UPDATE_VIDEO_INFORMATION_RECORD: {
      const { id } = action.payload;
      return {
        ...state,
        byIds: {
          ...state.byIds,
          [id]: {
            ...state.byIds[id],
            completed: !state.byIds[id].completed
          }
        }
      };
    }
    default:
      return state;
  }
}
