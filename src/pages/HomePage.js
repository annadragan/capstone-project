import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import { GoHome } from 'react-icons/go';
import { RiDoubleQuotesR } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../components/Header';
import level from '../icons/level.png';
import ScreenReaderOnly from '../components/ScreenReaderOnly';

export default function HomePage() {
  return (
    <>
      <Header>
        <GoHome
          style={{
            width: '32px',
            height: '32px',
            color: '#4C5567',
          }}
        />
        <Break
          style={{
            wordBreak: 'break-word',
          }}
        ></Break>
        Startseite
      </Header>
      <Level src={level} alt="Level up Deutsch"></Level>
      <LinkStyled role="link" to={'/vocabel'}>
        <BsFillArrowRightCircleFill
          style={{
            width: '35px',
            height: '35px',
            color: '#d70761',
            marginTop: '50px',
          }}
        />
        <ScreenReaderOnly>Gehe zu den Vokabelkärtchen</ScreenReaderOnly>
      </LinkStyled>
      <ExpressionWrapper>
        <QuoteIcon role="link" to={'/idioms'} />
        <ScreenReaderOnly>Gehe zu den Redewendungen</ScreenReaderOnly>
        <Text>„Es ist fünf vor zwölf!“</Text>
      </ExpressionWrapper>
    </>
  );
}

const Level = styled.img`
  width: 74vw;
  margin-top: 50px;
  max-width: 400px;
  height: auto;
`;

const ExpressionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  width: 90vw;
  height: 170px;
  margin-top: 70px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
  border-radius: 12px;
`;

const QuoteIcon = styled(Link).attrs(() => ({
  children: <RiDoubleQuotesR style={{ width: '35px', height: '35px' }} />,
}))`
  background: transparent;
  border: none;
  color: var(--color-primary-gray);
  display: flex;
  padding: 6px;
  justify-content: center;
  align-items: center;
`;

const Text = styled.p`
  font-size: 1.4rem;
`;

const LinkStyled = styled(Link)`
  text-decoration: none;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  font-size: 20px;
  margin: 32px;
  height: 34px;
  width: 75px;
`;

const Break = styled.div`
  margin-top: -16px;
`;
