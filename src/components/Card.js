import styled from 'styled-components';
import { BsTrash } from 'react-icons/bs';

export default function Card({
  word,
  example,
  explanation,
  onDeleteCard,
  _id,
}) {
  return (
    <CardWrapper>
      <CardWord>{word}</CardWord>
      <CardExample>{example}</CardExample>
      <CardExplanation>{explanation}</CardExplanation>
      <DeleteButton
        type="button"
        aria-label="delete a card"
        onClick={() => onDeleteCard(_id)}
      />
    </CardWrapper>
  );
}

const CardWrapper = styled.li`
  background-color: hsl(220, 15%, 35%);
  display: flex;
  overflow-x: auto;
  flex-direction: column;
  width: 300px;
  gap: 10px;
  padding: 20px;
  border-radius: 14px;
  margin-top: 50px;
  border-top: 16px solid #d70761;
  position: relative;
`;

const CardWord = styled.p`
  font-weight: bold;
  color: azure;
`;

const CardExample = styled.p`
  color: white;
  font-style: italic;
`;

const CardExplanation = styled.p`
  color: white;
`;

const DeleteButton = styled.button.attrs(() => ({
  children: <BsTrash style={{ width: '25px', height: '25px' }} />,
}))`
  position: absolute;
  bottom: 5px;
  right: 5px;
  background: transparent;
  border: transparent;
  &:hover {
    color: crimson;
  }
`;
