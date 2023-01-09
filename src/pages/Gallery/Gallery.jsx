import { useState, useEffect } from 'react';
// import photoJson from '../../data/photos';
import { GalleryList } from 'components/GalleryList/GalleryList';

import { SearchForm } from 'components/SearchForm/SearchForm';
import { ModalWindow } from 'components/Modal/Modal';

import { getImages } from 'service/api';



export const Gallery = () => {
    const [images, setImages] = useState([]);
    const [query, setQuery] = useState('');
    const [largeImgUrl, setLargeImgUrl] = useState('');
    const [page, setPage] = useState(1);
    const [showBtn, setShowBtn] = useState(false);
  
    useEffect(() => {
      if (!query) {
        return;
      }
      getImages(query, page).then(({ photos, total_results, per_page }) => {
        setImages(prevPhotos => [...prevPhotos, ...photos]);
        setShowBtn(page < Math.ceil(total_results / per_page));
      });
    }, [page, query]);
  
    const onFormSubmit = query => {
      setImages([]);
      setQuery(query);
      setLargeImgUrl('');
      setPage(1);
      setShowBtn(false);
    };
  
    const onImageClick = largeImgUrl => {
      setLargeImgUrl(largeImgUrl);
    };
  
    const loadMore = () => {
      setPage(prevState => prevState + 1);
    };
  
    return (
      <>
        <SearchForm onFormSubmit={onFormSubmit} btnText="Search" />
        <GalleryList list={images} onImageClick={onImageClick} />
        {showBtn && (
          <button type="button" onClick={loadMore}>
            Load more
          </button>
        )}
        {largeImgUrl && (
          <ModalWindow largeImgUrl={largeImgUrl} onImageClick={onImageClick} />
        )}
      </>
    );
  };