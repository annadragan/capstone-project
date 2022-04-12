import { BsPatchPlusFill } from 'react-icons/bs';

import AsideButton from '../components/AsideButton';
import Header from '../components/Header';
import ImageCardList from '../components/ImageCardList';
import ScreenReaderOnly from '../components/ScreenReaderOnly';
import ScrollToTop from '../components/ScrollToTop.js';
import { Link } from 'react-router-dom';

export default function Stories({ stories, onScrollUp, backToTop }) {
  return (
    <>
      <Header>Traditionen</Header>
      <Link to={'/create'}>
        <AsideButton variant="plus">
          <BsPatchPlusFill style={{ width: '35px', height: '35px' }} />
          <ScreenReaderOnly>go to create a tradition form</ScreenReaderOnly>
        </AsideButton>
      </Link>
      <ImageCardList stories={stories} />
      <ScrollToTop onClick={onScrollUp} hidden={backToTop} />
    </>
  );
}
