import styled, { css } from 'styled-components';

export default function IconButton({ children, ...buttonProps }) {
  return <ButtonStyled {...buttonProps}>{children}</ButtonStyled>;
}

const ButtonStyled = styled.button`
  background: transparent;
  border: transparent;
  margin: 2px;
  position: absolute;
  right: 1px;

  &:hover {
    color: crimson;
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
      color: ${props => (props.isBookmarked ? '#f80759' : 'black')};
    `}
`;
