import styled from 'styled-components';
import Input from './Input';
import Button from './Button';

export default function Form({ onCreateTerm, inputText }) {
  return (
    <>
      <FormWrapper
        aria-describedby="Create a new word"
        onSubmit={handleSubmitTerm}
        autoComplete="off"
      >
        <Input
          labelText="New word:"
          placeholder="Enter your word..."
          maxLength="80"
          minLength="2"
          id="new_word"
          name="new_word"
          value={inputText}
        />
        <Button
          children="Create a word"
          aria-label="Create a word"
          onClick={onCreateTerm}
          type="submit"
        />
        <p>{inputText}</p>
      </FormWrapper>
    </>
  );

  function handleSubmitTerm(event) {
    event.preventDefault();
    const form = event.target;
    const newWord = form.elements.new_word.value.trim();
    if (newWord.length >= 2) {
      onCreateTerm(newWord);
      form.reset();
    }
  }
}
const FormWrapper = styled.form``;
