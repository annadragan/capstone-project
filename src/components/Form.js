import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from './Button';
import Header from './Header';
import Input from './Input';

export default function Form({ onCreateTerm }) {
  const [newWord, setNewWord] = useState(0);
  const [newExample, setNewExample] = useState(0);
  const [newExplanation, setNewExplanation] = useState(0);
  const navigate = useNavigate();

  const disabled = newWord === '' || newExample === '' || newExplanation === '';

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
      <Header>Card form</Header>
      <Title>Create your vocabulary card</Title>
      <FormWrapper
        aria-describedby="Create a new word"
        onSubmit={handleSubmitTerm}
        autoComplete="off"
      >
        <InputWrapper>
          <Input
            labelText="new word*"
            placeholder="Type to add a word..."
            maxLength="20"
            minLength="2"
            id="new_word"
            name="new_word"
            value={newWord}
            // requiered
            type="text"
            onChange={recalculateWordCharacter}
          />
          <Counter>{newWord}/20</Counter>
        </InputWrapper>
        <InputWrapper>
          <Input
            labelText="example*"
            placeholder="Type to add some example phrase..."
            maxLength="80"
            minLength="4"
            rows={3}
            columns={10}
            id="new_example"
            name="new_example"
            value={newExample}
            // requiered
            type="text"
            onChange={recalculateExampleCharacter}
          />
          <Counter>{newExample}/80</Counter>
        </InputWrapper>
        <InputWrapper>
          <Input
            labelText="explanation*"
            placeholder="Type your explanation..."
            maxLength="200"
            minLength="4"
            rows={5}
            columns={10}
            id="new_explanation"
            name="new_explanation"
            value={newExplanation}
            // requiered
            type="text"
            onChange={recalculateExplanationCharacter}
          />
          <Counter>{newExplanation}/200</Counter>
        </InputWrapper>
        {/* {newWord.length === 0 ||
        newExample.length === 0 ||
        newExplanation.length === 0 ? (
          <p>Fill first all fields</p>
        ) : ( */}
        <Button category="Create a card" disabled={disabled}></Button>
        {/* )} */}
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
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const Counter = styled.small`
  display: flex;
  justify-content: right;
`;

const Title = styled.h2`
  font-size: 20px;
  font-weight: 500;
`;
