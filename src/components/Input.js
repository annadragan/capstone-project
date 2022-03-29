import styled from 'styled-components';

export default function Input({
  labelText,
  placeholder,
  maxLength,
  minLength,
  onChange,
  name,
  id,
  value,
}) {
  return (
    <>
      <StyledLabel htmlFor="new_word">{labelText}</StyledLabel>
      <StyledInput
        id={id}
        name={name}
        placeholder={placeholder}
        type="text"
        value={value}
        maxLength={maxLength}
        minLength={minLength}
        onChange={onChange}
        required
      />
    </>
  );
}

const StyledLabel = styled.label`
  margin: 6px;
`;

const StyledInput = styled.input`
  padding: 7px;
  font-size: 1rem;
`;
