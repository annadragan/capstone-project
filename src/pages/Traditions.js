import { BsPatchPlusFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import AsideButton from '../components/AsideButton';
import Header from '../components/Header';
import ImageCardList from '../components/ImageCardList';
import ScreenReaderOnly from '../components/ScreenReaderOnly';
import ScrollToTop from '../components/ScrollToTop.js';

export default function Stories({
  stories,
  onScrollUp,
  backToTop,
  onDeleteTradition,
}) {
  return (
    <>
      <Header>Traditionen</Header>
      <Link to={'/create'}>
        <AsideButton variant="plus">
          <BsPatchPlusFill
            style={{
              width: '35px',
              height: '35px',
            }}
          />
          <ScreenReaderOnly>
            Gehe zum Formular um eine neue Tradition anzulegen
          </ScreenReaderOnly>
        </AsideButton>
      </Link>
      {stories.length === 0 ? (
        <>
          <Text>
            Das ist ein Ort für alldas, was dich in Deutschland überrascht hat,
            was du erst hier kennengelernt hast, was du als 'typisch deutsch'
            bezeichnen würdest und was unter den Deutschen allgemein bekant ist.
            Nur mit Kenntnis des kulturellen Kontexts kannst du deine
            Sprachkenntnisse auf das höchste Niveau bringen und sagen, dass du
            dieser Sprache wirklich mächtig bist!
          </Text>
        </>
      ) : (
        <ImageCardList
          stories={stories}
          onDeleteTradition={onDeleteTradition}
        />
      )}
      <ScrollToTop onClick={onScrollUp} hidden={backToTop} />
    </>
  );
}

const Text = styled.p`
  text-align: center;
  padding: 20px;
`;
