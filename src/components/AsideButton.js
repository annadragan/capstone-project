import styled, { css } from 'styled-components';

export default function AsideButton({ children, ...buttonProps }) {
  return <ButtonStyled {...buttonProps}>{children}</ButtonStyled>;
}

const ButtonStyled = styled.button`
  position: fixed;
  z-index: 2;
  background: transparent;
  border: transparent;
  &:hover {
    color: #d70761;
  }

  ${props =>
    props.variant === 'scroll' &&
    css`
      left: 6px;
      bottom: 56px;
    `}

  ${props =>
    props.variant === 'plus' &&
    css`
      right: 6px;
      bottom: 56px;
    `}
`;
