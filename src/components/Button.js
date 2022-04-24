import styled from 'styled-components';

export default function Button({ category, ...props }) {
  return (
    <ButtonStyled {...props} aria-label="button" role="button">
      {category}
    </ButtonStyled>
  );
}

const ButtonStyled = styled.button`
  background-color: var(--color-pink);
  color: var(--color-whitesmoke);
  border-radius: 1000px;
  height: 45px;
  width: 140px;
  border: none;
  margin: 5px;
  padding: 7px 12px;
  font-size: 1.1rem;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  &:hover {
    width: 170px;
  }
`;
