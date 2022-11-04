import { SearchbarStyled } from './SearchbarStyled';
import { ImSearch } from 'react-icons/im'
import { toast } from 'react-toastify';
import { useState } from 'react';



export default function Searchbar({onSubmit}) {
  const [imageName, setImageName] = useState('');


  const onHendleNameChange = (e) => {
    setImageName(e.currentTarget.value.toLowerCase());
  };

  const onHendleSubmit = (e) => {
    e.preventDefault();

    if (imageName.trim() === '') {
      toast('Введіть запит');
      return 
    }
    onSubmit(imageName);
    setImageName('');
  };

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
