import styled from 'styled-components';
import Input from './Input';
import Button from './Button';

export default function Form({ onCreateTerm }) {
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
          maxLength="20"
          minLength="2"
          id="new_word"
          name="new_word"
          // required
        />
        <Input
          labelText="Example:"
          placeholder="Enter some example phrase..."
          maxLength="80"
          minLength="4"
          id="new_example"
          name="new_example"
        />
        <Input
          labelText="Explanation:"
          placeholder="Enter your explanation..."
          maxLength="200"
          minLength="4"
          id="new_explanation"
          name="new_explanation"
        />
        <Button type="submit">Create a card</Button>
      </FormWrapper>
    </>
  );

  function handleSubmitTerm(event) {
    event.preventDefault();
    const form = event.target;
    const newWord = form.elements.new_word.value.trim();
    const newExample = form.elements.new_example.value.trim();
    const newExplanation = form.elements.new_explanation.value.trim();
    if (
      (newWord.length >= 2) &
      (newExample.length >= 2) &
      (newExplanation.length >= 4)
    ) {
      onCreateTerm(newWord, newExample, newExplanation);
      form.reset();
    }
  }
}
const FormWrapper = styled.form``;
