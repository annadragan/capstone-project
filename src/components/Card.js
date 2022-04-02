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
  right: 5px;
  background: transparent;
  border: transparent;
  margin: 4px;
  &:hover {
    color: crimson;
  }
`;
