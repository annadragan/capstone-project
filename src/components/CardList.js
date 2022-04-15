import styled from 'styled-components';
import Card from './Card';

export default function CardList({
  vocabulary,
  onDeleteCard,
  onBookmarkCard,
  onEditCard,
}) {
  const bookmarkedList = vocabulary.filter(card => card.isBookmarked === false);
  return (
    <>
      <ListWrapper role="list" aria-label="vocabulary cards">
        {bookmarkedList?.map(
          ({ _id, word, example, explanation, isBookmarked }) => {
            return (
              <li key={_id}>
                <Card
                  word={word}
                  example={example}
                  explanation={explanation}
                  onDeleteCard={onDeleteCard}
                  _id={_id}
                  onBookmarkCard={onBookmarkCard}
                  isBookmarked={isBookmarked}
                  onEditCard={onEditCard}
                />
              </li>
            );
          }
        )}
      </ListWrapper>
    </>
  );
}

const ListWrapper = styled.ul`
  display: grid;
  justify-items: center;
  padding-left: 0;
  list-style: none;
  gap: 30px;
  opacity: 0.9;
  transition: 0.2s;

  @media (min-width: 640px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;
