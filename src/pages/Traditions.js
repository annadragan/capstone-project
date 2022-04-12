import { BsPatchPlusFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import AsideButton from '../components/AsideButton';
import Header from '../components/Header';
import ImageCardList from '../components/ImageCardList';
import ScreenReaderOnly from '../components/ScreenReaderOnly';
import ScrollToTop from '../components/ScrollToTop.js';

export default function Stories({ stories, onScrollUp, backToTop }) {
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
            gehe zu der Erstelle eine Tradition Form
          </ScreenReaderOnly>
        </AsideButton>
      </Link>
      <ImageCardList stories={stories} />
      <ScrollToTop onClick={onScrollUp} hidden={backToTop} />
    </>
  );
}
