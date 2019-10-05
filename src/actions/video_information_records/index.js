export const VIDEO_INFORMATION_RECORD_ACTION_TYPES = {
  ADD_VIDEO_INFORMATION_RECORD: "addVideoInformationRecord",
  EDIT_VIDEO_INFORMATION_RECORD: "editVideoInformationRecord",
  DELETE_VIDEO_INFORMATION_RECORD: "deleteVideoInformationRecord"
};

export const addVideoInformationRecord = content => ({
  type: VIDEO_INFORMATION_RECORD_ACTION_TYPES.ADD_VIDEO_INFORMATION_RECORD,
  payload: {
    id: 1,
    content
  }
});

export const editVideoInformationRecord = id => ({
  type: VIDEO_INFORMATION_RECORD_ACTION_TYPES.EDIT_VIDEO_INFORMATION_RECORD,
  payload: { id }
});

export const deleteVideoInformationRecord = id => ({
  type: VIDEO_INFORMATION_RECORD_ACTION_TYPES.DELETE_VIDEO_INFORMATION_RECORD,
  payload: { id }
});
