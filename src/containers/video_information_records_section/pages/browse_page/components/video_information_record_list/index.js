import React from "react";
import PropTypes from "prop-types";

const VideoInformationRecordList = ({ videoInformationRecords }) => (
  <ul className="list-group">
    {Object.keys(videoInformationRecords).map(record_id => (
      <li className="list-group-item" key={record_id}>
        {videoInformationRecords[record_id].title}
        {videoInformationRecords[record_id].video_snapshot_thumbnail_url}
        {videoInformationRecords[record_id].video_snapshot_url}
        {videoInformationRecords[record_id].description}
      </li>
    ))}
  </ul>
);

VideoInformationRecordList.propTypes = {
  videoInformationRecords: PropTypes.object.isRequired
};
//table th, table td { white-space: nowrap; }

export default VideoInformationRecordList;
