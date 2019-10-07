const actionTypes = {
  CREATE_VIDEO_INFORMATION_RECORD: "createVideoInformationRecord",
  UPDATE_VIDEO_INFORMATION_RECORD: "updateVideoInformationRecord",
  DELETE_VIDEO_INFORMATION_RECORD: "deleteVideoInformationRecord"
};

const actionCreators = {
  createVideoInformationRecord: attributes => ({
    type: actionTypes.CREATE_VIDEO_INFORMATION_RECORD,
    payload: {
      attributes: attributes
    }
  }),

  updateVideoInformationRecord: (id, attributes) => ({
    type: actionTypes.UPDATE_VIDEO_INFORMATION_RECORD,
    payload: {
      id: id,
      attributes: attributes
    }
  }),

  deleteVideoInformationRecord: id => ({
    type: actionTypes.DELETE_VIDEO_INFORMATION_RECORD,
    payload: {
      id: id
    }
  })
};

export { actionTypes };

export default actionCreators;
