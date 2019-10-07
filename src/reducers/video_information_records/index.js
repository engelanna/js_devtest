import { actionTypes } from "../../actions/video_information_records";
import initialState from "./initial_state.js";

const getNextId = records => Math.max(Object.keys(records)) + 1;

export default function(state = initialState, action) {
  let newState;

  switch (action.type) {
    case actionTypes.CREATE_VIDEO_INFORMATION_RECORD:
      newState = {
        ...state,
        [getNextId(state)]: action.payload.attributes
      };
      break;

    case actionTypes.UPDATE_VIDEO_INFORMATION_RECORD:
      newState = {
        ...state,
        [action.payload.id]: action.payload.attributes
      };
      break;

    case actionTypes.DELETE_VIDEO_INFORMATION_RECORD:
      const { [action.payload.id]: _targetRecord, ...withoutTargetRecord } = state;

      newState = {
        ...withoutTargetRecord
      };
      break;

    default:
      return state;
  }
  return newState;
}
