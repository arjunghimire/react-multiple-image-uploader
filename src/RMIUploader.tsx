/*
 *   Copyright (c) 2020 Arjun Ghimire (arjunghimire0714@gmail.com)
 *   All rights reserved.

 *   Permission is hereby granted, free of charge, to any person obtaining a copy
 *   of this software and associated documentation files (the "Software"), to deal
 *   in the Software without restriction, including without limitation the rights
 *   to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *   copies of the Software, and to permit persons to whom the Software is
 *   furnished to do so, subject to the following conditions:
 
 *   The above copyright notice and this permission notice shall be included in all
 *   copies or substantial portions of the Software.
 
 *   THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *   IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *   FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *   AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *   LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *   OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 *   SOFTWARE.
 */

import { CloseOutlined, CloudUploadOutlined } from "@ant-design/icons";
import { Button, Col, message, Row } from "antd";
import "antd/dist/antd.css";
import PropTypes from "prop-types";
import React, { useState } from "react";
import ImageUploading, { ImageListType } from "react-images-uploading";
import { CCard, CImage, CModal, CUpload } from "./components";
import "./index.scss";
import RMIUploaderProps from "./types";
import imagesData from "./utils";

const RMIUploader: React.FC<RMIUploaderProps> = ({
  isOpen,
  hideModal,
  onUpload,
  onSelect,
  onRemove,
  warnMessage,
  dataSources,
}) => {
  const [images, setImages] = useState([]);
  const [selectedImages, setSelectedImages] = useState([]);
  const maxNumber = 69;

  const onChange = (imageList: ImageListType) => {
    if (imageList.length > 9) {
      message.warn(warnMessage);
    } else {
      setImages(imageList as never[]);
    }
  };

  const onSelectImage = (checked, index, url, img) => {
    const data = {
      dataURL: url,
      index,
      img,
    };
    if (checked) {
      setSelectedImages([...selectedImages, data]);
    } else {
      const filterSelectedImages = selectedImages.filter(
        (image) => image.index !== index,
      );
      setSelectedImages(filterSelectedImages);
    }
  };

  const onClear = () => {
    setSelectedImages([]);
  };
  const greaterZeroUpload = images.length > 0 ? false : true;
  const greaterZeroMedia = selectedImages.length > 0 ? false : true;
  return (
    <>
      <CModal
        footer={
          <Row>
            <Col md={14}>
              {selectedImages.map((image, index) => (
                <CImage key={index} url={image.dataURL} />
              ))}
            </Col>
            <Col md={10}>
              <Button
                disabled={greaterZeroMedia}
                onClick={onClear}
                type="primary"
                danger
              >
                Clear ({selectedImages.length})
              </Button>
              <Button
                onClick={() => onSelect(selectedImages)}
                disabled={greaterZeroMedia}
                type="primary"
              >
                Insert into post
              </Button>
            </Col>
          </Row>
        }
        title="Insert Media"
        visible={isOpen}
        onCancel={hideModal}
      >
        <Row>
          <Col span={10}>
            <ImageUploading
              multiple
              value={images}
              onChange={onChange}
              maxNumber={maxNumber}
            >
              {({ onImageUpload, isDragging, dragProps }) => (
                <div className="upload__image-wrapper">
                  <CUpload
                    dragProps={dragProps}
                    isDragging={isDragging}
                    onImageUpload={onImageUpload}
                  />
                  <div className="upload-image-preview">
                    <Row>
                      <Col md={20}>
                        {images.map((image, index) => (
                          <CImage key={index} url={image.dataURL} />
                        ))}
                      </Col>
                      <Col md={4}>
                        <Button
                          type="primary"
                          danger
                          style={{
                            marginRight: 5,
                          }}
                          disabled={greaterZeroUpload}
                          onClick={() => setImages([])}
                          icon={<CloseOutlined />}
                          size="middle"
                        />
                        <Button
                          disabled={greaterZeroUpload}
                          type="primary"
                          onClick={() => onUpload(images)}
                          icon={<CloudUploadOutlined />}
                          size="middle"
                        />
                      </Col>
                    </Row>
                  </div>
                </div>
              )}
            </ImageUploading>
          </Col>
          <Col span={14}>
            <div className="media-library">
              {dataSources.map((img, index) => {
                const includeImage = selectedImages.find(
                  (image) => image.index === index,
                );
                return (
                  <CCard
                    index={index}
                    key={index}
                    checked={includeImage && includeImage.id}
                    onRemove={() => onRemove(img.id)}
                    onChange={(e) =>
                      onSelectImage(e.target.checked, index, img.dataURL, img)
                    }
                    imageURL={img.dataURL}
                  />
                );
              })}
            </div>
          </Col>
        </Row>
      </CModal>
    </>
  );
};

RMIUploader.defaultProps = {
  isOpen: false,
  dataSources: imagesData,
  warnMessage: "Number of selected images exceed maxNumber",
};

RMIUploader.propTypes = {
  isOpen: PropTypes.bool,
  onUpload: PropTypes.func,
  onSelect: PropTypes.func,
  hideModal: PropTypes.func,
  warnMessage: PropTypes.string,
  dataSources: PropTypes.array,
  onRemove: PropTypes.func,
};

export default RMIUploader;
