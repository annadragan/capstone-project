import Card from '../components/Card';
import Header from '../components/Header';

export default function BookmarkArchive({
  vocabulary,
  onBookmarkCard,
  onDeleteCard,
}) {
  return (
    <>
      <Header>Archive</Header>

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
            />
          )
      )}
    </>
  );
}
