import Header from '../components/Header';
import Card from '../components/Card';

export default function BookmarkPage({ vocabulary, onBookmarkCard }) {
  return (
    <>
      <Header>Bookmark Page</Header>
      <h2>hallo</h2>

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
            />
          )
      )}
    </>
  );
}
