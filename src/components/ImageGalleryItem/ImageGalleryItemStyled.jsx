import styled from '@emotion/styled';

export const GalleryItemStyled = styled.li`
// width: 300px;
//   height: 300px;
//   border-radius: 2px;
  box-shadow: 1px 1px 1px rgb(114, 208, 252), 
          4px 4px 4px rgb(114, 208, 252), 
          1px 4px 6px rgb(114, 208, 252);
`

export const ImageItemStyled = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

    :hover {
    transform: scale(1.03);
    cursor: zoom-in;
    box-shadow: 1px 1px 3px rgb(114, 208, 252), 
                1px 1px 1px rgb(114, 208, 252), 
                1px 1px 1px rgb(114, 208, 252), 
                1px 1px 9px rgb(114, 208, 252);
    }

`
