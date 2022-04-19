import React, { useState } from 'react';
import { RiDoubleQuotesR } from 'react-icons/ri';
import styled from 'styled-components';
import Button from '../components/Button';
import Header from '../components/Header';
import { idioms } from '../data';

export default function IdiomaticExpressions() {
  const [quote, setQuote] = useState(
    idioms[Math.floor(Math.random() * idioms.length)]
  );

  return (
    <>
      <Header>Redewendungen</Header>
      <IdiomaticButton
        category="nächste Redewendung"
        onClick={() => handleRandomeQuote()}
      ></IdiomaticButton>
      <ExpressionWrapper>
        <QuoteIcon />
        <ExpressionContent>{quote.expression}</ExpressionContent>
        <ExpressionMeaning>{quote.meaning}</ExpressionMeaning>
      </ExpressionWrapper>
    </>
  );

  function handleRandomeQuote() {
    const number = Math.floor(Math.random() * idioms.length);
    const quote = idioms[number];
    setQuote(quote);
  }
}

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

const ExpressionContent = styled.p`
  font-size: 20px;
  font-weight: 400;
  text-align: center;
  margin: 10px;
`;

const ExpressionMeaning = styled.p`
  text-align: center;
  margin: 10px;
`;

const QuoteIcon = styled.div.attrs(() => ({
  children: <RiDoubleQuotesR style={{ width: '35px', height: '35px' }} />,
}))`
  background: transparent;
  border: none;
  padding: 6px;
  margin: 0 10px;
`;

const IdiomaticButton = styled(Button)`
  height: 50px;
  width: auto;
`;
