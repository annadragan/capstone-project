import { BsPatchPlusFill } from 'react-icons/bs';
import { GiCardRandom } from 'react-icons/gi';
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
      <Header>
        <GiCardRandom
          style={{
            width: '40px',
            height: '40px',
            color: '#4C5567',
          }}
        />
        <Break
          style={{
            wordBreak: 'break-word',
          }}
        ></Break>
        Vokabelkärtchen
      </Header>
      {vocabulary.length === 0 ? (
        <>
          <Text>
            Das ist ein besonderer Ort, da du diesen nach deinen eigenen
            Vorlieben gestalten kannst. Hier kannst du die für dich wichtigen
            Vokabeln und Sätze aufbewahren und trainieren. Die Vokabelkärtchen
            mit den für dich persönlich interessanten und spanennden Wörtern
            sind beim perfektionieren einer anderen Sprache der Schlüssel zum
            Erfolg!
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
        <AsideButton type="button" variant="plus" aria-label="Zum Formular">
          <BsPatchPlusFill style={{ width: '35px', height: '35px' }} />{' '}
          <ScreenReaderOnly>
            Neues Vokabelkärtchen im Formular erstellen
          </ScreenReaderOnly>
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

const Break = styled.div`
  margin-top: -16px;
`;
