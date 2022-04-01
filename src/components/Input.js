import styled from 'styled-components';

export default function Input({
  labelText,
  placeholder,
  maxLength,
  minLength,
  rows,
  name,
}) {
  return (
    <>
      <StyledLabel htmlFor={name}>{labelText}</StyledLabel>
      <StyledTextarea
        id={name}
        name={name}
        placeholder={placeholder}
        type="text"
        maxLength={maxLength}
        minLength={minLength}
        rows={rows}
      />
    </>
  );
}

const StyledLabel = styled.label`
  margin: 6px;
`;

const StyledTextarea = styled.textarea`
  padding: 7px;
  font-size: 1rem;
  margin: 5px;
  border-radius: 5px;
  width: 90%;
  border-color: crimson;
  &:focus {
    outline: none;
    background-color: pink;
    width: 100%;
  }
  &::placeholder {
    color: rgb(159, 161, 190);
  }
  &:hover {
    background-color: azure;
  }
`;
