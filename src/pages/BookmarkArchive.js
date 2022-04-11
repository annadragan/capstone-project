import Card from '../components/Card';
import Header from '../components/Header';

export default function BookmarkArchive({
  vocabulary,
  onBookmarkCard,
  onDeleteCard,
  onEditCard,
}) {
  const bookmarkedList = vocabulary.filter(card => card.isBookmarked === true);

  return (
    <>
      <Header>Favoriten</Header>
      {bookmarkedList.length === 0 && (
        <>
          <p>Keine Favoriten gefunden</p>
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
    </>
  );
}
