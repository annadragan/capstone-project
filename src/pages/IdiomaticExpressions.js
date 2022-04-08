import { useState } from 'react';
import styled from 'styled-components';
import Button from '../components/Button';
import Header from '../components/Header';
import { idioms } from '../data';

export default function IdiomaticExpressions() {
  const [quote, setQuote] = useState('');

  return (
    <>
      <Header>Idiomatic Expressions</Header>
      {/* {quote && ( */}
      <>
        {idioms.map(({ _id, expression, meaning }) => {
          return (
            <ExpressionWrapper
              key={_id}
              expression={expression}
              meaning={meaning}
            >
              <ExpressionContent>
                {idioms[quote] && idioms[quote].expression}
              </ExpressionContent>
              <ExpressionMeaning>
                {idioms[quote] && idioms[quote].meaning}
              </ExpressionMeaning>
            </ExpressionWrapper>
          );
        })}
      </>
      {/* )} */}
      <Button
        category="next expression"
        onClick={() => handleRandomeQuote()}
      ></Button>
    </>
  );

  function handleRandomeQuote() {
    const quote = Math.floor(Math.random() * idioms.length);
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
