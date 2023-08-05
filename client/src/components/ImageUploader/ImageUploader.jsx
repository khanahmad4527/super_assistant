import React, { useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import cloudinary from "cloudinary";

cloudinary.config({
  cloud_name: "dalqx198y",
  api_key: "642127412723819",
  api_secret: "vm5tOAYubxNFCxho_QObwPaE39w",
});

const App = () => {
  const [previewFiles, setPreviewFiles] = useState([]);
  const [uploadedImages, setUploadedImages] = useState([]);

  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    onDrop: async (acceptedFiles) => {
      try {
        const uploadPromises = acceptedFiles.map(async (file) => {
          const response = await cloudinary.uploader.upload(file.preview);
          return response.secure_url;
        });

        const uploadedUrls = await Promise.all(uploadPromises);
        setUploadedImages(uploadedUrls);
      } catch (error) {
        console.error("Error uploading images to Cloudinary:", error);
      }
    },
  });

  useEffect(() => {
    return () => {
      previewFiles.forEach((file) => URL.revokeObjectURL(file.preview));
    };
  }, [previewFiles]);

  const files = previewFiles.map((file) => (
    <li key={file.path}>
      <img src={file.preview} alt={file.name} style={{ maxWidth: "100px", maxHeight: "100px" }} />
      {file.path} - {file.size} bytes
    </li>
  ));

  const uploadedImageElements = uploadedImages.map((url, index) => (
    <li key={index}>
      <img src={url} alt={`Uploaded ${index}`} style={{ maxWidth: "100px", maxHeight: "100px" }} />
    </li>
  ));

  return (
    <div>
      <section className="container">
        <div
          {...getRootProps({ className: "dropzone" })}
          style={{ border: "2px dashed #ccc", padding: "20px", textAlign: "center" }}
        >
          <input {...getInputProps()} />
          <p>Drag 'n' drop some files here, or click to select files</p>
        </div>
        <aside>
          <h4>Files</h4>
          <ul>{files}</ul>
          <h4>Uploaded Images</h4>
          <ul>{uploadedImageElements}</ul>
        </aside>
      </section>
    </div>
  );
};

export default App;
