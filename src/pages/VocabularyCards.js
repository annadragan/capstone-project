import { BsPatchPlusFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import CardList from '../components/CardList';
import Header from '../components/Header';
import ScrollToTop from '../components/ScrollToTop.js';
import AsideButton from '../components/AsideButton';
import ScreenReaderOnly from '../components/ScreenReaderOnly';

export default function VocabularyCards({
  vocabulary,
  onDeleteCard,
  onBookmarkCard,
  onEditCard,
  onScrollUp,
  backToTop,
}) {
  return (
    <>
      <Header>Vokabelkärtchen</Header>

      {vocabulary.length === 0 ? (
        <>
          <h2>No vocabulary cards found!</h2>
          <p>Looks like you haven't created any vocabulary cards yet...</p>
        </>
      ) : (
        <CardList
          vocabulary={vocabulary}
          onDeleteCard={onDeleteCard}
          onBookmarkCard={onBookmarkCard}
          onEditCard={onEditCard}
        />
      )}
      <Link to={'/form'}>
        <AsideButton
          type="button"
          variant="plus"
          aria-label="go to create a card-form button"
        >
          <BsPatchPlusFill style={{ width: '35px', height: '35px' }} />{' '}
          <ScreenReaderOnly>add a new vocabulary card</ScreenReaderOnly>
        </AsideButton>
      </Link>
      <ScrollToTop onClick={onScrollUp} hidden={backToTop} />
    </>
  );
}
