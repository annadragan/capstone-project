import styled from 'styled-components';

export default function Button({ onClick, children }) {
  return (
    <ButtonStyled onClick={onClick} aria-label="" role="button">
      {children}
    </ButtonStyled>
  );
}

const ButtonStyled = styled.button`
  background-color: #d70761;
  color: whitesmoke;
  border-radius: 999px;
  /* width: 100%; */
  border: none;
  margin: 5px;
  padding: 7px 12px;
  align-self: center;
`;
