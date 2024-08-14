import React, { useState } from "react";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../config/firebase";
export default function UploadImage() {
  const [image, setImage] = useState<any>("");
  const [imageUpload, setImageUpload] = useState<any>(null);
  const uploadImage = () => {
    const imageRef = ref(storage, `product/${image.name}`);
    uploadBytes(imageRef, image).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        console.log(url);
      });
    });
  };
  console.log(image);
  return (
    <div>
      UploadImage
      <input
        type="file"
        onChange={(e: any) => {
          setImage(e.target.files[0]);
        }}
      />
      <button onClick={uploadImage}>upload</button>
    </div>
  );
}
