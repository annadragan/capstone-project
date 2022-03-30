import styled, { css } from 'styled-components';

export default function Button({ onClick }) {
  return (
    <ButtonStyled onClick={onClick} aria-label="button" role="button">
      Button
    </ButtonStyled>
  );
}

const ButtonStyled = styled.button`
  background-color: #d70761;
  color: whitesmoke;
  border-radius: 999px;
  border: none;
  margin: 5px;
  padding: 7px 12px;
  align-self: center;

  ${props =>
    props.variant === 'Delete' &&
    css`
      background-color: hotpink;
    `}

  ${props =>
    props.variant === 'Toggle' &&
    css`
      background-color: midnightblue;
    `}
`;
