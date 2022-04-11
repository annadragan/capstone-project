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
    color: crimson;
  }

  ${props =>
    props.variant === 'scroll' &&
    css`
      left: 10px;
      bottom: 56px;
    `}

  ${props =>
    props.variant === 'plus' &&
    css`
      right: 16px;
      bottom: 56px;
    `}
    
    ${props =>
    props.variant === 'back' &&
    css`
      left: 16px;
      top: 56px;
    `}
`;
