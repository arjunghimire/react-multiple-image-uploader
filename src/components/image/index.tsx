import { Image } from "antd";
import PropTypes from "prop-types";
import React from "react";
import "./index.scss";
import CImageProps from "./type";

const sizes = {
  small: 30,
  medium: 70,
};

const CImage: React.FC<CImageProps> = ({ url, size = "small" }) => {
  return <Image width={sizes[size]} height={sizes[size]} src={url} />;
};

CImage.propTypes = {
  url: PropTypes.string,
  size: PropTypes.string,
};

export default CImage;
