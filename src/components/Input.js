import styled from 'styled-components';

export default function Input({
  labelText,
  placeholder,
  maxLength,
  minLength,
  rows,
  name,
  onChange,
  defaultValue,
  required,
}) {
  return (
    <>
      <StyledLabel htmlFor={name}>{labelText}</StyledLabel>
      <StyledTextarea
        id={name}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        type="text"
        maxLength={maxLength}
        minLength={minLength}
        rows={rows}
        defaultValue={defaultValue}
        required={required}
      />
    </>
  );
}

const StyledLabel = styled.label`
  margin: -4px 4px;
`;

const StyledTextarea = styled.textarea`
  padding: 7px;
  font-size: 1rem;
  margin: 5px;
  border-radius: 5px;
  width: 300px;
  border-color: crimson;
  &:focus {
    outline: none;
    width: 100%;
  }
  &::placeholder {
    color: var(--color-light-gray);
  }
  &:hover {
    background-color: azure;
  }
`;
