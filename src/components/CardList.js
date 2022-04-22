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
      <ListWrapper role="list" aria-label="Vokabelkärtchen">
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
  list-style: none;
  display: grid;
  justify-items: center;
  padding-left: 0;
  opacity: 0.9;
  gap: 30px;
`;
