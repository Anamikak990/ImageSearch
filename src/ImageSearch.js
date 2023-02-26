import React, { useState } from "react";
import axios from "axios";
import ImageModal from "./ImageModal";

const ImageSearch = () => {
  const [query, setQuery] = useState("");
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  const searchImages = (event) => {
    event.preventDefault();
    axios
      .get(
        `https://api.unsplash.com/search/photos/?client_id=A0s0MiCIf5QycWcMTtGkzY_lrzECOGXOLWHs20494DI&query=${query}`
      )
      .then((response) => {
        setImages(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="image-search">
      <h2>Image Gallery </h2>
      <form onSubmit={searchImages}>
        <input
          type="text"
          placeholder="Search for images..."
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      <div className="image-list">
        {images.map((image) => (
          <div key={image.id} className="image-card">
            <img
              src={image.urls.thumb}
              alt={image.alt_description}
              onClick={() => setSelectedImage(image)}
            />
            <div className="image-details">
              <div className="likes">{image.likes} Likes</div>
              <div className="username">By {image.user.username}</div>
            </div>
          </div>
        ))}
        {selectedImage && (
          <ImageModal
            selectedImage={selectedImage}
            onClose={() => setSelectedImage(null)}
          />
        )}
      </div>
    </div>
  );
};

export default ImageSearch;
