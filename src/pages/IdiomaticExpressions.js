import { useState } from 'react';
import styled from 'styled-components';
import Button from '../components/Button';
import Header from '../components/Header';
import { idioms } from '../data';

export default function IdiomaticExpressions() {
  const [quote, setQuote] = useState('');
  console.log(quote.expression);

  return (
    <>
      <Header>Idiomatic Expressions</Header>
      {quote && (
        <>
          <ExpressionWrapper>
            <ExpressionContent>{quote.expression}</ExpressionContent>
            <ExpressionMeaning>{quote.meaning}</ExpressionMeaning>
          </ExpressionWrapper>
        </>
      )}
      <Button
        category="next expression"
        onClick={() => handleRandomeQuote()}
      ></Button>
    </>
  );

  function handleRandomeQuote() {
    const Number = Math.floor(Math.random() * idioms.length);
    const quote = idioms[Number];
    setQuote(quote);
  }
}

const ExpressionWrapper = styled.div`
  padding: 20px;
`;

const ExpressionContent = styled.p`
  font-size: 20px;
  display: flex;
  justify-content: center;
`;

const ExpressionMeaning = styled.p``;
