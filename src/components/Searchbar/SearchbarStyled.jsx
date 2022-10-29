import styled from '@emotion/styled';

export const SearchbarStyled = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 40px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  margin-bottom: 10px;
  color: #fff;;
  background-color: rgb(114, 208, 252);

  
  .form {
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 600px;
    background-color: #fff;
    border-radius: 3px;
    overflow: hidden;
  }
  .button{
    display: inline-block;
    width: 32px;
    height: 32px;
    border: 0;
    background-image: url('https://image.flaticon.com/icons/svg/149/149852.svg');
    background-size: 40%;
    background-repeat: no-repeat;
    background-position: center;
    opacity: 0.6;
    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
    outline: none;
      :hover {
        opacity: 1;
      }
  }
 
  .input{
    display: inline-block;
    width: 100%;
    font: inherit;
    font-size: 15px;
    border: none;
    outline: none;
    padding-left: 4px;
    padding-right: 4px;
      ::placeholder {
        font: inherit;
        font-size: 18px;
      }
  }

    `


