import {GalleryContainer, GalleryRow, GalleryItem} from "./styles"

interface PhotoGalleryProps {
  photos: string[];
}

const PhotoGallery = ({ photos }: PhotoGalleryProps) => {
  const emptyPhotos = Array(6 - photos.length).fill('');

  return (
    <GalleryContainer>
      <h2>Fotos</h2>
      <GalleryRow>
        {photos.map((photo, index) => (
          <GalleryItem key={index}>
            <img src={photo} alt={`Foto ${index + 1}`} />
          </GalleryItem>
        ))}
        {emptyPhotos.map((_, index) => (
          <GalleryItem key={index} className="empty" />
        ))}
      </GalleryRow>
    </GalleryContainer>
  );
};

export default PhotoGallery;