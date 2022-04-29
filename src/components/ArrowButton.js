import { useEffect, useState } from 'react';
import { BsFillArrowUpCircleFill } from 'react-icons/bs';
import AsideButton from './AsideButton';
import ScreenReaderOnly from './ScreenReaderOnly';

export default function ArrowButton() {
  const [backToTop, setBackToTop] = useState(true);

  useEffect(() => {
    function setButtonVisible() {
      if (window.pageYOffset > 100) {
        setBackToTop(false);
      } else {
        setBackToTop(true);
      }
    }
    window.addEventListener('scroll', setButtonVisible);
    return function cleanup() {
      window.removeEventListener('scroll', setButtonVisible);
    };
  }, []);

  function onScrollUp() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  return (
    <AsideButton
      onClick={onScrollUp}
      type="button"
      hidden={backToTop}
      variant="scroll"
    >
      <BsFillArrowUpCircleFill style={{ width: '35px', height: '35px' }} />
      <ScreenReaderOnly>Nach oben scrollen</ScreenReaderOnly>
    </AsideButton>
  );
}
