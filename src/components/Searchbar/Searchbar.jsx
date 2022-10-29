import React, { Component } from 'react';
import { SearchbarStyled } from './SearchbarStyled';
import { ImSearch } from 'react-icons/im'
import { toast } from 'react-toastify';


export default class Searchbar extends Component {
  state = {
    imageName: '',
  };
  onHendleNameChange = (e) => {
    this.setState({ imageName: e.currentTarget.value.toLowerCase() });
  };
  onHendleSubmit = (e) => {
    e.preventDefault();

    if (this.state.imageName.trim() === '') {
      toast('Введіть запит');
      return 
    }
    this.props.onSubmit(this.state.imageName);
    this.setState({ imageName: '' });
  };

  render() {
    const { onHendleSubmit, onHendleNameChange } = this;
    const { imageName } = this.state;
  return (
    <SearchbarStyled className="searchbar" >
      <form
        className="form"
        onSubmit={onHendleSubmit}
        >
        <button
          type="submit"
          className="button"
        >
          <span className="button-label">
            <ImSearch />
          </span>
        </button>
        <input
          className="input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={onHendleNameChange}
          value={imageName}
          name="imageName"
        />
           </form>
    </SearchbarStyled>
  )
  };
}
