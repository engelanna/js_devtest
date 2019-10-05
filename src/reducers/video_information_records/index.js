import { VIDEO_INFORMATION_RECORD_ACTION_TYPES } from "../../actions/video_information_records";

const initialState = {
  allIds: [],
  byIds: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case VIDEO_INFORMATION_RECORD_ACTION_TYPES.ADD_VIDEO_INFORMATION_RECORD: {
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
    case VIDEO_INFORMATION_RECORD_ACTION_TYPES.EDIT_VIDEO_INFORMATION_RECORD: {
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
