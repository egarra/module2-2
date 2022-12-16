import { GalleryListItem } from '../../components/GalleryListItem/GalleryListItem';
import { ListImages } from './GalleryList.styled';
export const GalleryList = ({ list, onImageClick }) => {
  return (
    <ListImages>
      {list.map(({ previewURL, largeImageURL }) => {
        return (
          <GalleryListItem
            key={previewURL}
            previewURL={previewURL}
            onImageClick={onImageClick}
            largeImageURL={largeImageURL}
          />
        );
      })}
    </ListImages>
  );
};
