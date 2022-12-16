export const GalleryListItem = ({
  previewURL,
  onImageClick,
  largeImageURL,
}) => {
  return (
    <li onClick={() => onImageClick(largeImageURL)}>
      <img src={previewURL} />
    </li>
  );
};
