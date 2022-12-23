// import { Component } from 'react';
import { useState, useEffect } from 'react';
// import photoJson from '../../data/photos';
import { GalleryList } from '../../components/GalleryList/GalleryList';

import { SearchForm } from 'components/SearchForm/SearchForm';
import { ModalWindow } from 'components/Modal/Modal';

import { getImages } from '../../service/api';

export const PhotoGallary = () => {
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
// export class PhotoGallary extends Component {
//   state = {
//     query: '',
//     images: [],
//     largeImgUrl: '',
//     page: 1,
//     showBtn: false,
//   };

//   componentDidUpdate(_, prevState) {
//     const { query, page } = this.state;

//     if (query !== prevState.query || page !== prevState.page) {
//       getImages(query, page).then(({ photos, total_results, per_page }) => {
//         this.setState(prevState => ({
//           images: [...prevState.images, ...photos],
//           showBtn: page < Math.ceil(total_results / per_page),
//         }));
//       });
//     }
//   }

//   loadMore = () => {
//     this.setState(prevState => ({ page: prevState.page + 1 }));
//   };

//   onFormSubmit = query => {
//     this.setState({
//       query,
//       images: [],
//       largeImgUrl: '',
//       page: 1,
//       showBtn: false,
//     });
//     console.log(query);
//   };

//   onImageClick = largeImgUrl => {
//     this.setState({ largeImgUrl });
//   };

//   render() {
//     return (
//       <>
//         <SearchForm onFormSubmit={this.onFormSubmit} btnText="Search" />
//         <GalleryList
//           list={this.state.images}
//           onImageClick={this.onImageClick}
//         />
//         {this.state.showBtn && (
//           <button type="button" onClick={this.loadMore}>
//             Load more
//           </button>
//         )}
//         {this.state.largeImgUrl && (
//           <ModalWindow
//             largeImgUrl={this.state.largeImgUrl}
//             onImageClick={this.onImageClick}
//           />
//         )}
//       </>
//     );
//   }
// }
