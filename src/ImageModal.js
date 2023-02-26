import React from "react";

function ImageModal({ selectedImage, onClose }) {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <img
          src={selectedImage.urls.regular}
          alt={selectedImage.alt_description}
        />
        <div className="caption">
          <div>{selectedImage.likes} Likes</div>
          <div>By {selectedImage.user.username}</div>
          <div>{selectedImage.alt_description}</div>
        </div>
      </div>
    </div>
  );
}
export default ImageModal;
