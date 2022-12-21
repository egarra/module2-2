import { GalleryListItem } from '../../components/GalleryListItem/GalleryListItem';
import { ListImages } from './GalleryList.styled';
export const GalleryList = ({ list, onImageClick }) => {
  return (
    <ListImages>
      {list.map(({ id, alt, src }) => {
        return (
          <GalleryListItem
            key={id}
            previewURL={src.large}
            onImageClick={onImageClick}
            largeImageURL={src.landscape}
            alt={alt}
          />
        );
      })}
    </ListImages>
  );
};
