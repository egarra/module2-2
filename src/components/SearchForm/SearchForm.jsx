import { useState } from 'react';

export const SearchForm = ({ onFormSubmit, btnText }) => {
  const [searchValue, setSearchValue] = useState('');

  const inputChange = event => {
    setSearchValue(event.target.value);
  };
  const handleSubmit = event => {
    event.preventDefault();
    onFormSubmit(searchValue);
    event.target.reset();
  };
  return (
    <form onSubmit={handleSubmit}>
      <input onChange={inputChange} />
      <button type="submit"> {btnText} </button>
    </form>
  );
}
