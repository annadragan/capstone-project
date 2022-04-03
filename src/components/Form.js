import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from './Button';
import Header from './Header';
import Input from './Input';
import React from 'react';

export default function Form({ onCreateTerm }) {
  const [newWord, setNewWord] = useState(0);
  const [newExample, setNewExample] = useState(0);
  const [newExplanation, setNewExplanation] = useState(0);
  const navigate = useNavigate();

  const disabled = newWord === '' || newExample === '' || newExplanation === '';

  // const [textAreaCount, ChangeTextAreaCount] = useState(0);
  const recalculateWordCharacter = e => {
    setNewWord(e.target.value.length);
  };
  const recalculateExampleCharacter = e => {
    setNewExample(e.target.value.length);
  };
  const recalculateExplanationCharacter = e => {
    setNewExplanation(e.target.value.length);
  };
  return (
    <>
      <FormWrapper
        aria-describedby="Create a new word"
        onSubmit={handleSubmitTerm}
        autoComplete="off"
      >
        <Header>Card form</Header>
        <InputWrapper>
          <Input
            labelText="New word:"
            placeholder="Type to add a word..."
            maxLength="20"
            minLength="2"
            id="new_word"
            name="new_word"
            value={newWord}
            type="text"
            onChange={recalculateWordCharacter}
          />
          <small>{newWord}/20</small>
        </InputWrapper>
        <InputWrapper>
          <Input
            labelText="Example:"
            placeholder="Type to add some example phrase..."
            maxLength="80"
            minLength="4"
            rows={3}
            columns={10}
            id="new_example"
            name="new_example"
            value={newExample}
            type="text"
            onChange={recalculateExampleCharacter}
          />
          <small>{newExample}/80</small>
        </InputWrapper>
        <InputWrapper>
          <Input
            labelText="Explanation:"
            placeholder="Type your explanation..."
            maxLength="200"
            minLength="4"
            rows={5}
            columns={10}
            id="new_explanation"
            name="new_explanation"
            value={newExplanation}
            type="text"
            onChange={recalculateExplanationCharacter}
          />
          <small>{newExplanation}/200</small>
        </InputWrapper>
        <Button
          category="Create a card"
          disabled={disabled}
          aria-label="Create a card Button"
        ></Button>
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
      navigate('/');
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
