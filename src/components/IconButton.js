import styled, { css } from 'styled-components';

export default function IconButton({ children, ...buttonProps }) {
  return <ButtonStyled {...buttonProps}>{children}</ButtonStyled>;
}

const ButtonStyled = styled.button`
  background: transparent;
  border: transparent;

  position: absolute;
  right: -2px;
  color: var(--color-icon-button);
  &:hover {
    color: var(--color-pink);
  }

  ${props =>
    props.variant === 'trash' &&
    css`
      bottom: 5px;
    `}

  ${props =>
    props.variant === 'pen' &&
    css`
      bottom: 45%;
    `}

    ${props =>
    props.variant === 'bookmark' &&
    css`
      top: -9px;
      color: ${props => (props.isBookmarked ? '#28f89e' : '#cbc5b9')};
    `}
`;
