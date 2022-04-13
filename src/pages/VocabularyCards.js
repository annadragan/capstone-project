import { BsPatchPlusFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import AsideButton from '../components/AsideButton';
import CardList from '../components/CardList';
import Header from '../components/Header';
import ScreenReaderOnly from '../components/ScreenReaderOnly';
import ScrollToTop from '../components/ScrollToTop.js';

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
          <Text>
            Das ist ein besonderer Ort, da du diesen nach eigenen Vorliben
            gestallten kannst. Hier kannst du die für dich wichtigen Vokabeln
            und Sätze aufbewahren und trainieren. Die Vokabelkärtchen mit den
            für dich persönlich interessanten und spanennden Wörtern sind beim
            perfektionieren einer anderen Sprache der Schlüssel zum Erfolg!
          </Text>
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

const Text = styled.p`
  text-align: center;
  padding: 20px;
`;
