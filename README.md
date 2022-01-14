# React Multiple Image Uploader

A react component for uploading and preview multiple images

# Notice
I will actively work on this project after Feb 15, 2022.

## Table of Contents

- [Installation](#installation)
- [Features](#features)
- [Screenshot](#screenshot)
- [Usage](#usage)
- [Support](#support)
- [Contributing](#contributing)

## Installation

Npm

```
npm install react-multiple-image-uploader
```

Yarn

```
yarn add react-multiple-image-uploader
```

## Features

- Mutiple images upload
- Drag and drop
- Collection of previos images
- Deletion of previous image
- Preview selected image

## Screenshot

![React Multiple Image Uploader](screenshot/image.gif?raw=true "React Multiple Image Uploader")

## Example

```js
import { useState } from "react";
import { RMIUploader } from "react-multiple-image-uploader";

const dataSources = [
  {
    id: 1,
    dataURL: "https://picsum.photos/seed/1/600",
  },
  {
    id: 2,
    dataURL: "https://picsum.photos/seed/2/600",
  },
  {
    id: 3,
    dataURL: "https://picsum.photos/seed/3/600",
  },
  {
    id: 4,
    dataURL: "https://picsum.photos/seed/4/600",
  },
  {
    id: 5,
    dataURL: "https://picsum.photos/seed/5/600",
  },
  {
    id: 6,
    dataURL: "https://picsum.photos/seed/6/600",
  },
  {
    id: 7,
    dataURL: "https://picsum.photos/seed/7/600",
  },
  {
    id: 8,
    dataURL: "https://picsum.photos/seed/8/600",
  },
  {
    id: 9,
    dataURL: "https://picsum.photos/seed/9/600",
  },
  {
    id: 10,
    dataURL: "https://picsum.photos/seed/10/600",
  },
];

function App() {
  const [visible, setVisible] = useState(false);
  const handleSetVisible = () => {
    setVisible(true);
  };
  const hideModal = () => {
    setVisible(false);
  };
  const onUpload = (data) => {
    console.log("Upload files", data);
  };
  const onSelect = (data) => {
    console.log("Select files", data);
  };
  const onRemove = (id) => {
    console.log("Remove image id", id);
  };

  return (
    <div className="App">
      <button onClick={handleSetVisible}>Show Me</button>
      <RMIUploader
        isOpen={visible}
        hideModal={hideModal}
        onSelect={onSelect}
        onUpload={onUpload}
        onRemove={onRemove}
        dataSources={dataSources}
      />
    </div>
  );
}

export default App;
```

Note: dataSources should be correct format (with id and dataURL)

## Props

| parameter   | type     | default                              | description                                                  |
| ----------- | -------- | ------------------------------------ | ------------------------------------------------------------ |
| isOpen      | boolean  | false (required)                     | Control if the modal is open or not(true/false)              |
| hideModal   | function | required                             | Callback function to control modal boolean value (ie isOpen) |
| onUpload    | function | required                             | Callback function return uploading images list               |
| onSelect    | function | required                             | Callback function return selected images list                |
| onRemove    | function | required                             | Callback function return delete image id                     |
| warnMessage | string   |                                      | Number of selected images exceed maxNumber warn message      |
| dataSources | array    | dataSources (above array) (required) | List of already uploaded images in array                     |

## Support

Please [open an issue](https://github.com/arjunghimire/react-multiple-image-uploader/issues/new) for support.

## Contributing

Please contribute using [Github Flow](https://guides.github.com/introduction/flow/). Create a branch, add commits, and [open a pull request](https://github.com/arjunghimire/react-multiple-image-uploader/compare/).
