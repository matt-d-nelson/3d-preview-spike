import React from "react";
import Cropper from "cropperjs";
import "cropperjs/dist/cropper.min.css";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";

function ImageCropper(props) {
  const [imageDestination, setImageDestination] = useState("");

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
      <div className="img-container">
        <img ref={imageElement} src={props.src} alt="Source" />
      </div>
      <img className="img-preview" src={imageDestination} alt="Destination" />
    </div>
  );
}

export default ImageCropper;
