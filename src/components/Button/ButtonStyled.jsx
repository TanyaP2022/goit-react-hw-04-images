import styled from '@emotion/styled';

export const ButtonStyled = styled.button`
  padding: 8px 16px;
  margin-top: 20px;
  margin-bottom: 10px;
  margin-left: 43%;
  border-radius: 2px;
  background-color: rgb(114, 208, 252);
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  display: inline-block;
  color: #fff;
  border: 0;
  text-decoration: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 18px;
  line-height: 24px;
  font-style: normal;
  font-weight: 500;
  min-width: 180px;
    box-shadow: 1px 1px 3px rgb(243, 247, 156), 
                1px 1px 1px rgb(243, 247, 156), 
                1px 1px 1px rgb(243, 247, 156), 
                1px 1px 9px rgb(243, 247, 156);
    :hover,
    :focus {
  background-color: rgb(243, 247, 196);
  color: rgb(114, 208, 252);
    box-shadow: 1px 1px 3px rgb(114, 208, 252), 
                1px 1px 1px rgb(114, 208, 252), 
                1px 1px 1px rgb(114, 208, 252), 
                1px 1px 9px rgb(114, 208, 252);
}
`
