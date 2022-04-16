import Header from '../components/Header';
import time from '../images/time.png';
import styled from 'styled-components';

export default function HomePage() {
  return (
    <>
      <Header>Startseite</Header>
      <p>Level Up Dein Deutsch - Es ist Fünf vor zwölf!</p>
      <Hour src={time} alt="time to learn"></Hour>
    </>
  );
}

const Hour = styled.img`
  width: 300px;
`;
