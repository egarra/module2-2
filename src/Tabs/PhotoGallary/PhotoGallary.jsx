import { Component } from 'react';
import photoJson from '../../data/photos';
import { GalleryList } from '../../components/GalleryList/GalleryList';
import ClockLoader from "react-spinners/ClockLoader";
import { SearchForm } from 'components/SearchForm/SearchForm';
import { ModalWindow } from 'components/Modal/Modal';
import { Backdrop } from 'components/Backdrop/Backdrop.styled';

import { getImages } from '../../service/api';

export class PhotoGallary extends Component {
  state = {
    query: '',
    images: [],
    largeImgUrl: '',
    page: 1,
    showBtn: false,
    error: null,
    isEmpty: false,
    isLoading: false,
  };

  componentDidUpdate(_, prevState) {
    const { query, page } = this.state;

    if (query !== prevState.query || page !== prevState.page) {
      this.setState({isLoading: true})
      getImages(query, page)
        .then(({ photos, total_results, per_page }) => {
          if (photos.length === 0) {
            this.setState({ isEmpty: true });
            return;
          }
          this.setState(prevState => ({
            images: [...prevState.images, ...photos],
            showBtn: page < Math.ceil(total_results / per_page),
          }));
        })
        .catch(error => this.setState({ error: error.message }))
        .finally(() => this.setState({ isLoading: false }));
    }
  }

  loadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  onFormSubmit = query => {
    this.setState({
      query,
      images: [],
      largeImgUrl: '',
      page: 1,
      showBtn: false,
      error: null,
      isEmpty: false,
      isLoading: false,
    });
    console.log(query);
  };

  onImageClick = largeImgUrl => {
    this.setState({ largeImgUrl });
  };

  render() {
    return (
      <>
        <SearchForm onFormSubmit={this.onFormSubmit} btnText="Search" />
        {this.state.isLoading && <Backdrop><ClockLoader color="#36d7b7" size={150}/></Backdrop> }
        {this.state.images.length > 0 && (
          <GalleryList
            list={this.state.images}
            onImageClick={this.onImageClick}
          />
        )}
        {this.state.isEmpty && <p>Nothing find for this {this.state.query}.</p>}
        {this.state.error && <p>Something wrong! {this.state.error}</p>}
        {this.state.showBtn && (
          <button type="button" onClick={this.loadMore}>
            Load more
          </button>
        )}
        {this.state.largeImgUrl && (
          <ModalWindow
            largeImgUrl={this.state.largeImgUrl}
            onImageClick={this.onImageClick}
          />
        )}
      </>
    );
  }
}
