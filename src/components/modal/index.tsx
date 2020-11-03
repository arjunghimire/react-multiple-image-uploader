import { Modal } from "antd";
import PropTypes from "prop-types";
import React from "react";
import "./index.scss";
import CModalProps from "./types";

const CModal: React.FC<CModalProps> = ({
  title,
  footer,
  visible,
  onCancel,
  children,
}) => {
  return (
    <Modal
      width={"80%"}
      centered
      maskClosable={false}
      title={title}
      visible={visible}
      onCancel={onCancel}
      footer={footer}
    >
      {children}
    </Modal>
  );
};

CModal.propTypes = {
  title: PropTypes.string,
  footer: PropTypes.any,
  visible: PropTypes.bool,
  onCancel: PropTypes.func,
  children: PropTypes.any,
};

export default CModal;
