import { TiArrowBackOutline } from 'react-icons/ti';
import { useNavigate } from 'react-router-dom';
import AsideButton from '../components/AsideButton';
import Header from '../components/Header';
import ScreenReaderOnly from '../components/ScreenReaderOnly';

export default function Traditions() {
  const navigate = useNavigate();
  return (
    <>
      <Header>Traditionen</Header>
      <AsideButton variant="back" onClick={() => navigate('/create')}>
        <TiArrowBackOutline style={{ width: '35px', height: '35px' }} />{' '}
        <ScreenReaderOnly>go to create a tradition form</ScreenReaderOnly>
      </AsideButton>
    </>
  );
}
