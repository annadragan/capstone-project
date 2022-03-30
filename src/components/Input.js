import styled from 'styled-components';

export default function Input({
  labelText,
  placeholder,
  maxLength,
  minLength,
  onChange,
  name,
  // value,
}) {
  return (
    <>
      <StyledLabel htmlFor={name}>{labelText}</StyledLabel>
      <StyledInput
        id={name}
        name={name}
        placeholder={placeholder}
        type="text"
        // value={value}
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
