export const GalleryListItem = ({
  previewURL,
  onImageClick,
  largeImageURL,
  alt,
}) => {
  return (
    <li onClick={() => onImageClick(largeImageURL)}>
      <img src={previewURL} alt={alt} />
    </li>
  );
};
