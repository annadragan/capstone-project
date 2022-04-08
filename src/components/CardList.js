import styled from 'styled-components';
import Card from './Card';

export default function CardList({
  vocabulary,
  onDeleteCard,
  onBookmarkCard,
  onEditCard,
}) {
  return (
    <>
      <ListWrapper role="list" aria-label="vocabulary cards">
        {vocabulary?.map(
          ({ _id, word, example, explanation, isBookmarked }) => {
            return (
              <Card
                key={_id}
                word={word}
                example={example}
                explanation={explanation}
                onDeleteCard={onDeleteCard}
                _id={_id}
                onBookmarkCard={onBookmarkCard}
                isBookmarked={isBookmarked}
                onEditCard={onEditCard}
              />
            );
          }
        )}
      </ListWrapper>
    </>
  );
}

const ListWrapper = styled.div`
  display: grid;
  justify-items: center;
  padding-left: 0;
  padding: 20px;
  list-style: none;
  gap: 30px;
  opacity: 0.9;
  transition: 0.2s;

  @media (min-width: 650px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 950px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;
