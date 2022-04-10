import { useEffect, useState } from 'react';
import { BsFillArrowUpCircleFill } from 'react-icons/bs';
import AsideButton from './AsideButton';
import ScreenReaderOnly from './ScreenReaderOnly';

export default function ScrollToTop() {
  const [backToTop, setBackToTop] = useState(true);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 100) {
        setBackToTop(false);
      } else {
        setBackToTop(true);
      }
      return () => {
        if (window.pageYOffset > 100) {
          setBackToTop(false);
        } else {
          setBackToTop(true);
        }
      };
    });
  }, []);

  // useEffect(() => {
  //   return () => {
  //     // This is the cleanup function
  //   }
  // }, []);

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
      <BsFillArrowUpCircleFill style={{ width: '35px', height: '35px' }} />{' '}
      <ScreenReaderOnly>scroll to the top</ScreenReaderOnly>
    </AsideButton>
  );
}
