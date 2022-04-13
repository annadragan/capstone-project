import styled from 'styled-components';
import Card from '../components/Card';
import Header from '../components/Header';
import ScrollToTop from '../components/ScrollToTop.js';

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
      <Header>Favoriten</Header>
      {bookmarkedList.length === 0 && (
        <>
          <Text>
            Das machst du gut! Hierher kannst du die Vokabelkärtchen verschieben
            die du dir bereits gut merkst um sie nicht zu verlieren. Wenn du
            eine Abwechslung brauchst lerne ein paar Redewendungen auf der
            nächsten Seite kennen. Sie werden haüfig in Gesprächen, Filmen und
            Büchern benutzt und sie zu verstehen gehört bei der
            Sprachentwicklung einfach dazu!
          </Text>
        </>
      )}
      <div>
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
      </div>
      <ScrollToTop onClick={onScrollUp} hidden={backToTop} />
    </>
  );
}

const Text = styled.p`
  padding: 20px;
  text-align: center;
`;
