import styled from 'styled-components';
import Input from './Input';
import Button from './Button';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';

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
        <Header>Create card</Header>
        <InputWrapper>
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
        </InputWrapper>
        <InputWrapper>
          <Input
            labelText="Example:"
            placeholder="Enter some example phrase..."
            maxLength="80"
            minLength="4"
            id="new_example"
            name="new_example"
            value={newExample}
          />
        </InputWrapper>
        <InputWrapper>
          <Input
            labelText="Explanation:"
            placeholder="Enter your explanation..."
            maxLength="200"
            minLength="4"
            id="new_explanation"
            name="new_explanation"
            value={newExplanation}
          />
        </InputWrapper>
        <Button disabled={disabled} type="submit">
          {' '}
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
      navigate('/vocabularycards');
      form.reset();
    }
  }
}
const FormWrapper = styled.form`
  display: grid;
  gap: 15px;
  margin-bottom: 80px;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;
