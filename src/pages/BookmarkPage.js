import Header from '../components/Header';
import CardList from '../components/CardList';

export default function BookmarkPage({ vocabulary, onBookmarkCard }) {
  return (
    <>
      <Header>Bookmark Page</Header>
      <CardList onBookmarkCard={onBookmarkCard} />
    </>
  );
}
