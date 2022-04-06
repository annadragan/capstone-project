import styled, { css } from 'styled-components';

export default styled.button`
  padding: 8px 20px;
  border-radius: 12px;
  transition-duration: 0.3s;
  color: #fff;
  font-size: 1rem;
  width: 30%;
  border: none;
  align-self: center;
  display: flex;
  justify-content: center;

  ${props =>
    props.variant === 'cancel' &&
    css`
      background-color: green;
      &:hover {
        background-color: #3d9816;
      }
    `}

  ${props =>
    props.variant === 'confirm' &&
    css`
      background-color: #e52b50;
      &:hover {
        background-color: red;
      }
    `}
`;
