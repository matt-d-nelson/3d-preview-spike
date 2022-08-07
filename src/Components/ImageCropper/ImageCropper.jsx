import React from "react";
import Cropper from "cropperjs";
import "cropperjs/dist/cropper.min.css";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";

function ImageCropper(props) {
  const [imageDestination, setImageDestination] = useState("");

  const [uploadedImg, setUploadedImg] = useState("");

  const onUploadChange = (event) => {
    const image = event.target.files[0];

    const reader = new FileReader();
    reader.onload = () => {
      setUploadedImg(reader.result);
    };
    reader.readAsDataURL(image);
    console.log(image);
  };
  // create imageElement ref
  const imageElement = useRef();

  useEffect(() => {
    const cropper = new Cropper(imageElement.current, {
      zoomable: false,
      scalable: false,
      aspectRatio: 1,
      crop: () => {
        const canvas = cropper.getCroppedCanvas();
        setImageDestination(canvas.toDataURL("image/png"));
      },
    });
  }, []);

  return (
    <div>
      <input type="file" onChange={onUploadChange} />
      <div className="img-container">
        <img ref={imageElement} src={uploadedImg} alt="Source" />
      </div>
      <img className="img-preview" src={imageDestination} alt="Destination" />
    </div>
  );
}

export default ImageCropper;
