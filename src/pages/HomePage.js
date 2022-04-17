import { RiDoubleQuotesR } from 'react-icons/ri';
import styled from 'styled-components';
import Header from '../components/Header';
import level from '../images/level.png';
import time from '../images/time.png';

export default function HomePage() {
  return (
    <>
      <Header>Startseite</Header>
      <Level src={level} alt="time to learn"></Level>
      <ExpressionWrapper>
        <QuoteIcon />
        <Text>"Es ist Fünf vor zwölf!</Text>
      </ExpressionWrapper>
      <Time>
        <TimeCircle></TimeCircle>
      </Time>
      <Subject>
        <p>Deutsch</p>
      </Subject>
    </>
  );
}

const Time = styled.div`
  height: 70px;
  width: 70px;
  background-image: url(${time});
  background-size: 100%;
  border-radius: 50%;
  position: absolute;
  box-shadow: -4px 2px 56px hsl(220, 15%, 35%);
  left: 39%;
  top: 36%;
  transform: translate(-46% 40%);
  animation: hour 20s linear infinite;

  @keyframes hour {
    from {
      transform: rotate(0deg) translateX(150px) rotate(0deg);
    }
    to {
      transform: rotate(360deg) translateX(150px) rotate(-360deg);
    }
  }
`;

const TimeCircle = styled.div`
  height: 76px;
  width: 79px;
  border: 1px dotted #fff;
  position: relative;
  left: -8px;
  top: -8px;
  border-radius: 40px;
`;

const Subject = styled.div`
  height: 70px;
  width: 70px;
  border: 1px dotted #fff;
  position: absolute;
  left: 37%;
  top: 58%;
  border-radius: 50px;
  transform: translate(-50% 54%);
  animation: subject 16s linear infinite;

  @keyframes subject {
    from {
      transform: rotate(0deg) translateX(130px) rotate(0deg);
    }
    to {
      transform: rotate(360deg) translateX(130px) rotate(-360deg);
    }
  }
`;

const Level = styled.img`
  width: 260px;
  &:hover {
    width: 300px;
  }
`;

const ExpressionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  width: 90%;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
  border-radius: 12px;
  margin: 30px auto;
`;

const QuoteIcon = styled.div.attrs(() => ({
  children: <RiDoubleQuotesR style={{ width: '35px', height: '35px' }} />,
}))`
  background: transparent;
  border: none;
  padding: 6px;
  margin: 0 10px;
`;

const Text = styled.p`
  font-size: 1.4rem;
`;
