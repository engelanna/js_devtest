export const actionTypes = {
  CREATE_VIDEO_INFORMATION_RECORD: "createVideoInformationRecord",
  UPDATE_VIDEO_INFORMATION_RECORD: "updateVideoInformationRecord",
  DELETE_VIDEO_INFORMATION_RECORD: "deleteVideoInformationRecord"
};

const actions = {
  createVideoInformationRecord: content => ({
    type: actionTypes.CREATE_VIDEO_INFORMATION_RECORD,
    payload: {
      id: 1,
      content
    }
  }),

  updateVideoInformationRecord: id => ({
    type: actionTypes.UPDATE_VIDEO_INFORMATION_RECORD,
    payload: { id }
  }),

  deleteVideoInformationRecord: id => ({
    type: actionTypes.DELETE_VIDEO_INFORMATION_RECORD,
    payload: { id }
  })
};

export default actions;
