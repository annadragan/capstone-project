import { BsFillBookmarkCheckFill, BsTrash } from 'react-icons/bs';
import styled from 'styled-components';
import ScreenReaderOnly from './ScreenReaderOnly';

export default function Card({
  word,
  example,
  explanation,
  onDeleteCard,
  _id,
  onBookmarkCard,
  isBookmarked,
}) {
  return (
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
      <DeleteButton
        type="button"
        aria-label="delete this card"
        onClick={() => onDeleteCard(_id)}
      >
        <ScreenReaderOnly>delete this card</ScreenReaderOnly>
      </DeleteButton>
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
