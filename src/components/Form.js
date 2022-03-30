import styled from 'styled-components';
import Input from './Input';
import Button from './Button';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Form({ onCreateTerm }) {
  const [newWord, setNewWord] = useState('');
  const [newExample, setNewExample] = useState('');
  const [newExplanation, setNewExplanation] = useState('');
  const navigate = useNavigate();

  const disabled = newWord === '' || newExample === '' || newExplanation === '';

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
          value={newWord}
          // required
        />
        <Input
          labelText="Example:"
          placeholder="Enter some example phrase..."
          maxLength="80"
          minLength="4"
          id="new_example"
          name="new_example"
          value={newExample}
        />
        <Input
          labelText="Explanation:"
          placeholder="Enter your explanation..."
          maxLength="200"
          minLength="4"
          id="new_explanation"
          name="new_explanation"
          value={newExplanation}
        />
        <Button disabled={disabled} type="submit">
          Create a card
        </Button>
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
      setNewWord('');
      setNewExample('');
      setNewExplanation('');
      navigate('/cards');
      form.reset();
    }
  }
}
const FormWrapper = styled.form``;
