import styled, { css } from 'styled-components';

export default function IconButton() {
  return <ButtonStyled aria-label="icon button" role="button"></ButtonStyled>;
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
