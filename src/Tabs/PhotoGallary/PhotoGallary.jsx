import { Component } from 'react';
import photoJson from '../../data/photos';
import { GalleryList } from '../../components/GalleryList/GalleryList';

import { SearchForm } from 'components/SearchForm/SearchForm';
import { ModalWindow } from 'components/Modal/Modal';

export class PhotoGallary extends Component {
  state = {
    query: '',
    images: photoJson,
    largeImgUrl: '',
  };

  onFormSubmit = query => {
    this.setState({ query });
    console.log(query);
  };

  onImageClick = largeImgUrl => {
    this.setState({ largeImgUrl });
  };

  render() {
    console.log(this.state.images);
    return (
      <>
        <SearchForm onFormSubmit={this.onFormSubmit} btnText="Search" />;
        <GalleryList
          list={this.state.images}
          onImageClick={this.onImageClick}
        />
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
