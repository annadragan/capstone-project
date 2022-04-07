import styled, { css } from 'styled-components';
import ScreenReaderOnly from './ScreenReaderOnly';

export default function IconButton({ buttonText, children, ...buttonProps }) {
  return (
    <ButtonStyled {...buttonProps}>
      {children}
      <ScreenReaderOnly>{buttonText}</ScreenReaderOnly>
    </ButtonStyled>
  );
}

const ButtonStyled = styled.button`
  background: transparent;
  border: transparent;
  margin: 4px;
  position: absolute;
  right: 1px;
  &:hover {
    color: crimson;
  }

  ${props =>
    props.variant === 'delete' &&
    css`
      bottom: 5px;
    `}

  ${props =>
    props.variant === 'edit' &&
    css`
      bottom: 50%;
    `}

    ${props =>
    props.variant === 'bookmark' &&
    css`
      top: -9px;
      color: ${props => (props.isBookmarked ? 'palevioletred' : 'linen')};
    `}
`;
