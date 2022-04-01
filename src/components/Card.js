import styled from 'styled-components';

export default function Card({ word, example, explanation }) {
  return (
    <CardWrapper>
      <CardWord>{word}</CardWord>
      <CardExample>{example}</CardExample>
      <CardExplanation>{explanation}</CardExplanation>
    </CardWrapper>
  );
}

const CardWrapper = styled.li`
  background-color: hsl(220, 15%, 35%);
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  border-radius: 14px;
  margin-top: 50px;
  border-top: 16px solid #d70761;
`;

const CardWord = styled.p`
  font-weight: bold;
  color: azure;
`;

const CardExample = styled.p`
  color: white;
  font-style: italic;
`;

const CardExplanation = styled.p`
  color: white;
`;
