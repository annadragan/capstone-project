import { useState } from 'react';
import { BsTrash } from 'react-icons/bs';
import { FaFeatherAlt } from 'react-icons/fa';
import { BsShieldFillCheck } from 'react-icons/bs';
import styled from 'styled-components';
import Button from './Button';
import DeleteMessage from './DeleteMessage';
import IconButton from './IconButton';
import ScreenReaderOnly from './ScreenReaderOnly';

export default function Card({
  word,
  example,
  explanation,
  onDeleteCard,
  _id,
  onBookmarkCard,
  isBookmarked,
  onEditCard,
}) {
  const [showMessage, setShowMessage] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  return (
    <>
      {isEditing ? (
        <EditForm onSubmit={handleSubmitEdit} autoComplete="off">
          <EditInputWrapper>
            <EditLabel htmlFor="word">editiere das Wort</EditLabel>
            <EditInput
              id="word"
              defaultValue={word}
              maxLength="20"
              minLength="2"
              type="text"
              rows={1}
              columns={10}
            />
          </EditInputWrapper>
          <EditInputWrapper>
            <EditLabel htmlFor="example">editiere den Beispielsatz</EditLabel>
            <EditInput
              id="example"
              defaultValue={example}
              maxLength="80"
              minLength="4"
              type="text"
              rows={3}
              columns={10}
            />
          </EditInputWrapper>
          <EditInputWrapper>
            <EditLabel htmlFor="explanation">editiere die Erklärung</EditLabel>
            <EditInput
              id="explanation"
              defaultValue={explanation}
              maxLength="200"
              minLength="4"
              type="text"
              rows={5}
              columns={10}
            />
          </EditInputWrapper>
          <Button category="Speichern" type="submit"></Button>
        </EditForm>
      ) : (
        <CardWrapper isBookmaked={isBookmarked}>
          <TestList>
            <CardWord>{word}</CardWord>
            <CardExample>{example}</CardExample>
            <CardExplanation>{explanation}</CardExplanation>
          </TestList>
          <IconButton
            type="button"
            aria-label="bookmark this card"
            onClick={() => onBookmarkCard(_id)}
            isBookmarked={isBookmarked}
            variant="bookmark"
          >
            <BsShieldFillCheck style={{ width: '25px', height: '25px' }} />
            <ScreenReaderOnly>bookmark this card</ScreenReaderOnly>
          </IconButton>
          <IconButton
            type="button"
            onClick={() => setIsEditing(!isEditing)}
            variant="pen"
          >
            <FaFeatherAlt style={{ width: '25px', height: '25px' }} />
            <ScreenReaderOnly>edit this card</ScreenReaderOnly>
          </IconButton>
          <IconButton
            type="button"
            aria-label="delete this card"
            _id={_id}
            onClick={() => setShowMessage(true)}
            variant="trash"
          >
            <BsTrash style={{ width: '25px', height: '25px' }} />
            <ScreenReaderOnly>delete this card</ScreenReaderOnly>
          </IconButton>
          {showMessage && (
            <DeleteMessage
              onConfirmDelete={() => onDeleteCard(_id)}
              onCancelDelete={() => setShowMessage(false)}
            />
          )}
        </CardWrapper>
      )}
    </>
  );

  function handleSubmitEdit(event) {
    event.preventDefault();
    const { word, example, explanation } = event.target.elements;
    onEditCard({
      _id: _id,
      word: word.value,
      example: example.value,
      explanation: explanation.value,
    });
    setIsEditing(false);
  }
}

const CardWrapper = styled.div`
  background-color: hsl(220, 15%, 35%);
  display: flex;
  flex-direction: column;
  word-wrap: break-word;
  width: 300px;
  gap: 10px;
  padding: 20px 30px 20px 20px;
  border-radius: 14px;
  border-top: 16px solid #d70761;
  position: relative;

  box-shadow: rgba(0, 0, 0, 0.12) 0px 6px 16px;
`;

const TestList = styled.dl`
  margin: 0;
`;

const CardWord = styled.dt`
  display: flex;
  justify-content: center;
  font-weight: bold;
  font-size: 1.2rem;
  padding-bottom: 5px;
`;

const CardExample = styled.dd`
  margin-left: 0;
  font-size: 0.9rem;
  padding-bottom: 5px;
`;

const CardExplanation = styled.dd`
  margin-left: 0;
  font-size: 1rem;
`;

const EditForm = styled.form`
  display: grid;
  border: 1px solid black;
  border-radius: 7px;
  padding: 4px;
  gap: 10px;
  width: 300px;
`;

const EditInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const EditLabel = styled.label`
  margin: -4px 4px;
`;

const EditInput = styled.textarea`
  padding: 7px;
  font-size: 1rem;
  margin: 5px;
  border-radius: 5px;
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
