import { CloseOutlined } from "@ant-design/icons";
import { Button } from "antd";
import PropTypes from "prop-types";
import React from "react";
import "./index.scss";
import CCardProps from "./types";

const CCard: React.FC<CCardProps> = ({
  index,
  imageURL,
  checked,
  onChange,
  onRemove,
}) => (
  <div className="image-card">
    <input
      onChange={onChange}
      type="checkbox"
      checked={checked}
      id={`cb${index}`}
    />
    <label htmlFor={`cb${index}`}>
      <img src={imageURL} />
    </label>
    <div className="options">
      <Button
        type="primary"
        size="small"
        danger
        onClick={onRemove}
        shape="circle"
        icon={<CloseOutlined />}
      />
    </div>
  </div>
);

CCard.propTypes = {
  index: PropTypes.number,
  imageURL: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  onRemove: PropTypes.func,
};

export default CCard;
