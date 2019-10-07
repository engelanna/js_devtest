import reducer from "./index.js";
import { actionTypes } from "../../actions/video_information_records";
import initialState from "./initial_state.js";

const exampleAttributes = {
  title: "Title #1",
  video_snapshot_thumbnail_url: `https://cdn.quotesgram.com/small/59/73/1306120091-Grumpy-Cat-Compilation-10.jpg`,
  video_snapshot_url: `http://www.vitamin-ha.com/wp-content/uploads/2013/09/Grumpy-Cat-Compilation-10.jpg`,
  description: "Description #1"
};

const expectedAfterUpdate = {
  title: "Updates incoming!",
  video_snapshot_thumbnail_url: `https://cdn.quotesgram.com/small/59/73/1306120091-Grumpy-Cat-Compilation-10.jpg`,
  video_snapshot_url: `http://www.vitamin-ha.com/wp-content/uploads/2013/09/Grumpy-Cat-Compilation-10.jpg`,
  description: "Description #1"
};

describe("todos reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(initialState, {})).toEqual({
      ...initialState
    });
  });

  it("should handle CREATE_VIDEO_INFORMATION_RECORD", () => {
    expect(
      reducer(
        {},
        {
          type: actionTypes.CREATE_VIDEO_INFORMATION_RECORD,
          payload: {
            attributes: {
              ...exampleAttributes
            }
          }
        }
      )
    ).toEqual({ [1]: exampleAttributes });
  });

  it("should handle UPDATE_VIDEO_INFORMATION_RECORD", () => {
    expect(
      reducer(
        { [1]: exampleAttributes },
        {
          type: actionTypes.UPDATE_VIDEO_INFORMATION_RECORD,
          payload: {
            id: 1,
            attributes: {
              ...exampleAttributes,
              title: "Updates incoming!"
            }
          }
        }
      )
    ).toEqual({ [1]: expectedAfterUpdate });
  });

  it("should handle DELETE_VIDEO_INFORMATION_RECORD", () => {
    expect(
      reducer(
        { [1]: exampleAttributes },
        {
          type: actionTypes.DELETE_VIDEO_INFORMATION_RECORD,
          payload: {
            id: 1
          }
        }
      )
    ).toEqual({});
  });
});
