import styled from 'styled-components';
import Card from '../components/Card';
import Header from '../components/Header';
import ScrollToTop from '../components/ScrollToTop';

export default function BookmarkArchive({
  vocabulary,
  onBookmarkCard,
  onDeleteCard,
  onEditCard,
  onScrollUp,
  backToTop,
}) {
  const bookmarkedList = vocabulary.filter(card => card.isBookmarked === true);

  return (
    <>
      <Header>Archiv</Header>
      {bookmarkedList.length === 0 && (
        <>
          <Text>
            Hierhin kannst du die Vokabelkärtchen verschieben, die du dir
            bereits gut gemerkt hast, um sie nicht zu verlieren. Wenn du eine
            Abwechslung brauchst kannst du ein paar Redewendungen auf der
            nächsten Seite kennenlernen. Sie werden haüfig in Gesprächen, Filmen
            und Büchern verwendet und sie zu verstehen gehört bei der
            Sprachentwicklung einfach dazu!
          </Text>
        </>
      )}
      <ListWrapper>
        {vocabulary?.map(
          ({ _id, word, example, explanation, isBookmarked }) =>
            isBookmarked && (
              <Card
                key={_id}
                word={word}
                example={example}
                explanation={explanation}
                _id={_id}
                onBookmarkCard={onBookmarkCard}
                isBookmarked={isBookmarked}
                onDeleteCard={() => onDeleteCard(_id)}
                onEditCard={onEditCard}
              />
            )
        )}
      </ListWrapper>
      <ScrollToTop onClick={onScrollUp} hidden={backToTop} />
    </>
  );
}

const Text = styled.p`
  padding: 20px;
  text-align: center;
`;

const ListWrapper = styled.ul`
  display: grid;
  justify-items: center;
  padding-left: 0;
  list-style: none;
  gap: 30px;
  opacity: 0.9;
  transition: 0.2s;
`;
