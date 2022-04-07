import { useState } from 'react';
import { BsFillBookmarkCheckFill, BsTrash } from 'react-icons/bs';
import { GrEdit } from 'react-icons/gr';
import styled from 'styled-components';
import DeleteMessage from './DeleteMessage';
import ScreenReaderOnly from './ScreenReaderOnly';
import Button from './Button';

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
        <EditForm onSubmit={handleSubmitEdit}>
          <EditInputWrapper>
            <EditLabel htmlFor="word">Edit word</EditLabel>
            <EditInput id="word" defaultValue={word} />
          </EditInputWrapper>
          <EditInputWrapper>
            <EditLabel htmlFor="example">Edit example</EditLabel>
            <EditInput id="example" defaultValue={example} />
          </EditInputWrapper>
          <EditInputWrapper>
            <EditLabel htmlFor="explanation">Edit explanation</EditLabel>
            <EditInput id="explanation" defaultValue={explanation} />
          </EditInputWrapper>
          <Button variant={'save'} category="Save changes" type="submit" />
        </EditForm>
      ) : (
        <CardWrapper isBookmaked={isBookmarked}>
          <CardWord>{word}</CardWord>
          <CardExample>{example}</CardExample>
          <CardExplanation>{explanation}</CardExplanation>
          <BookmarkButton
            type="button"
            aria-label="bookmark this card"
            onClick={() => onBookmarkCard(_id)}
            isBookmarked={isBookmarked}
          >
            <ScreenReaderOnly>bookmark this card</ScreenReaderOnly>
          </BookmarkButton>

          <EditButton type="button" onClick={() => setIsEditing(!isEditing)}>
            <ScreenReaderOnly>edit this card</ScreenReaderOnly>
          </EditButton>

          <DeleteButton
            type="button"
            aria-label="delete this card"
            _id={_id}
            onClick={() => setShowMessage(true)}
          >
            <ScreenReaderOnly>delete this card</ScreenReaderOnly>
          </DeleteButton>
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

const CardWrapper = styled.dl`
  background-color: hsl(220, 15%, 35%);
  display: flex;
  flex-direction: column;
  word-wrap: break-word;
  width: 300px;
  gap: 10px;
  padding: 20px;
  border-radius: 14px;
  margin-top: 50px;
  border-top: 16px solid #d70761;
  position: relative;
`;

const CardWord = styled.dt`
  display: flex;
  justify-content: center;
  font-weight: bold;
  color: azure;
  font-size: 1.2rem;
`;

const CardExample = styled.dd`
  color: white;
  margin-left: 0;
  font-style: italic;
  padding: 4px;
`;

const CardExplanation = styled.dd`
  color: white;
  margin-left: 0;
  padding: 4px;
`;

const DeleteButton = styled.button.attrs(() => ({
  children: <BsTrash style={{ width: '25px', height: '25px' }} />,
}))`
  position: absolute;
  bottom: 5px;
  right: 1px;
  background: transparent;
  border: transparent;
  margin: 4px;
  &:hover {
    color: crimson;
  }
`;

const BookmarkButton = styled.button.attrs(() => ({
  children: (
    <BsFillBookmarkCheckFill style={{ width: '25px', height: '25px' }} />
  ),
}))`
  position: absolute;
  top: -9px;
  right: 1px;
  background: transparent;
  border: transparent;
  margin: 4px;
  color: ${props => (props.isBookmarked ? 'palevioletred' : 'linen')};
  &:hover {
    color: crimson;
  }
`;

const EditButton = styled.button.attrs(() => ({
  children: <GrEdit style={{ width: '25px', height: '25px' }} />,
}))`
  position: absolute;
  bottom: 50%;
  right: 1px;
  background: transparent;
  border: transparent;
  margin: 4px;
  &:hover {
    color: crimson;
  }
`;

const EditForm = styled.form`
  display: grid;
  gap: 10px;
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
