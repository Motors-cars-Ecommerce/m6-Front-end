import { Key } from "react";
import { GalleryContainer } from "./styles";

const PhotoGallery = (photos: any[]) => {
  return (
    <GalleryContainer>
      <div className="gallery-row">
        {photos.slice(0, 3).map((photo: { id: Key | null | undefined; url: string | undefined; alt: string | undefined; }) => (
          <div className="gallery-item" key={photo.id}>
            <img src={photo.url} alt={photo.alt} />
          </div>
        ))}
        {[...Array(Math.max(3 - photos.length, 0))].map((_, index) => (
          <div className="gallery-item empty" key={`empty-${index}`} />
        ))}
      </div>
      <div className="gallery-row">
        {photos.slice(3, 6).map((photo) => (
          <div className="gallery-item" key={photo.id}>
            <img src={photo.url} alt={photo.alt} />
          </div>
        ))}
        {[...Array(Math.max(6 - photos.length, 0))].map((_, index) => (
          <div className="gallery-item empty" key={`empty-${index}`} />
        ))}
      </div>
    </GalleryContainer>
  );
}

export default PhotoGallery