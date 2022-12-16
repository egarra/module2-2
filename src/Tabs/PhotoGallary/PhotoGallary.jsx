import { Component } from 'react';
import photoJson from '../../data/photos';
import { GalleryList } from '../../components/GalleryList/GalleryList'

import { SearchForm } from 'components/SearchForm/SearchForm';

export class PhotoGallary extends Component {
  state = {
    query: '',
    images: photoJson,
  };

  onFormSubmit = query => {
    this.setState({ query });
    console.log(query);
  };

  render() {
    console.log(this.state.images);
    return (
      <>
        <SearchForm onFormSubmit={this.onFormSubmit} btnText="Search" />;
        <GalleryList list={this.state.images} />
      </>
    );
  }
}
