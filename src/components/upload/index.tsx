import { InboxOutlined } from "@ant-design/icons";
import PropTypes from "prop-types";
import React from "react";
import "./index.scss";
import CUploadProps from "./types";

const CUpload: React.FC<CUploadProps> = ({
  dragProps,
  isDragging,
  onImageUpload,
}) => (
  <div
    className={`upload-container ${isDragging ? "upload-drag" : ""}`}
    {...dragProps}
    onClick={onImageUpload}
  >
    <p className="ant-upload-drag-icon">
      <InboxOutlined size={80} />
    </p>
    <p className="ant-upload-text">Click or drag file to this area to upload</p>
    <p className="ant-upload-hint">Support for a single or bulk upload.</p>
  </div>
);

CUpload.propTypes = {
  dragProps: PropTypes.object,
  isDragging: PropTypes.bool,
  onImageUpload: PropTypes.func,
};

export default CUpload;
