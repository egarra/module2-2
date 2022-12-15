import { Component } from 'react';

import { SearchForm } from 'components/SearchForm/SearchForm';

export class PhotoGallary extends Component {
  state = {
    query: '',
  };

  onFormSubmit = query => {
    this.setState({ query });
    console.log(query);
  };

  render() {
    return <SearchForm onFormSubmit={this.onFormSubmit} btnText="Search" />;
  }
}
