"use strict";
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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var icons_1 = require("@ant-design/icons");
var antd_1 = require("antd");
require("antd/dist/antd.css");
var prop_types_1 = require("prop-types");
var react_1 = require("react");
var react_images_uploading_1 = require("react-images-uploading");
var components_1 = require("./components");
require("./index.scss");
var utils_1 = require("./utils");
var RMIUploader = function (_a) {
    var onUpload = _a.onUpload, onSelect = _a.onSelect, onRemove = _a.onRemove, warnMessage = _a.warnMessage, dataSources = _a.dataSources;
    var _b = react_1.useState([]), images = _b[0], setImages = _b[1];
    var _c = react_1.useState([]), selectedImages = _c[0], setSelectedImages = _c[1];
    var maxNumber = 69;
    var onChange = function (imageList) {
        if (imageList.length > 7) {
            antd_1.message.warn(warnMessage);
        }
        else {
            setImages(imageList);
        }
    };
    var onSelectImage = function (checked, index, url, img) {
        var data = {
            dataURL: url,
            index: index,
            img: img
        };
        if (checked) {
            setSelectedImages(__spreadArrays(selectedImages, [data]));
        }
        else {
            var filterSelectedImages = selectedImages.filter(function (image) { return image.index !== index; });
            setSelectedImages(filterSelectedImages);
        }
    };
    var onClear = function () {
        setSelectedImages([]);
        setImages([]);
    };
    var greaterZeroUpload = images.length > 0 ? false : true;
    var greaterZeroMedia = selectedImages.length > 0 ? false : true;
    return (react_1["default"].createElement(antd_1.Card, null,
        react_1["default"].createElement(antd_1.Row, null,
            react_1["default"].createElement(antd_1.Col, { span: 10 },
                react_1["default"].createElement(react_images_uploading_1["default"], { multiple: true, value: images, onChange: onChange, maxNumber: maxNumber }, function (_a) {
                    var onImageUpload = _a.onImageUpload, isDragging = _a.isDragging, dragProps = _a.dragProps;
                    return (react_1["default"].createElement("div", { className: "upload__image-wrapper" },
                        react_1["default"].createElement(components_1.CUpload, { dragProps: dragProps, isDragging: isDragging, onImageUpload: onImageUpload }),
                        react_1["default"].createElement("div", { className: "upload-image-preview" },
                            react_1["default"].createElement(antd_1.Row, null,
                                react_1["default"].createElement(antd_1.Col, { md: 18 }, images.map(function (image, index) { return (react_1["default"].createElement(components_1.CImage, { key: index, url: image.dataURL })); })),
                                react_1["default"].createElement(antd_1.Col, { md: 6 },
                                    react_1["default"].createElement(antd_1.Button, { type: "primary", danger: true, style: {
                                            marginRight: 5
                                        }, disabled: greaterZeroUpload, onClick: function () { return setImages([]); }, icon: react_1["default"].createElement(icons_1.CloseOutlined, null), size: "middle" }),
                                    react_1["default"].createElement(antd_1.Button, { disabled: greaterZeroUpload, type: "primary", onClick: function () { return onUpload(images); }, icon: react_1["default"].createElement(icons_1.CloudUploadOutlined, null), size: "middle" }))))));
                })),
            react_1["default"].createElement(antd_1.Col, { span: 14 },
                react_1["default"].createElement("div", { className: "media-library" }, dataSources.map(function (img, index) {
                    var includeImage = selectedImages.find(function (image) {
                        return image.index === index ? true : false;
                    });
                    return (react_1["default"].createElement(components_1.CCard, { index: index, key: index, checked: includeImage, onRemove: function () { return onRemove(img.id); }, onChange: function (e) {
                            return onSelectImage(e.target.checked, index, img.dataURL, img);
                        }, imageURL: img.dataURL }));
                }))),
            react_1["default"].createElement(antd_1.Divider, null)),
        react_1["default"].createElement(antd_1.Row, null,
            react_1["default"].createElement(antd_1.Col, { md: 18 }, selectedImages.map(function (image, index) { return (react_1["default"].createElement(components_1.CImage, { key: index, url: image.dataURL })); })),
            react_1["default"].createElement(antd_1.Col, { md: 6 },
                react_1["default"].createElement(antd_1.Button, { disabled: greaterZeroMedia, onClick: onClear, type: "primary", danger: true },
                    "Clear (",
                    selectedImages.length,
                    ")"),
                " ",
                "\u00A0\u00A0",
                react_1["default"].createElement(antd_1.Button, { onClick: function () { return onSelect(selectedImages); }, disabled: greaterZeroMedia, type: "primary" }, "Insert into post")))));
};
RMIUploader.defaultProps = {
    dataSources: utils_1["default"],
    warnMessage: "Number of selected images exceed maxNumber"
};
RMIUploader.propTypes = {
    onUpload: prop_types_1["default"].func,
    onSelect: prop_types_1["default"].func,
    warnMessage: prop_types_1["default"].string,
    dataSources: prop_types_1["default"].array,
    onRemove: prop_types_1["default"].func
};
exports["default"] = RMIUploader;
