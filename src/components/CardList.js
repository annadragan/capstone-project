import Card from './Card';
import styled from 'styled-components';
// import { vocabulary } from '../db';

export default function CardList({ vocabulary }) {
  return (
    <>
      <ListWrapper role="list" aria-label="vocabulary cards" rows={3}>
        {vocabulary.map(({ _id, word, example, explanation }) => {
          return (
            <Card
              key={_id}
              word={word}
              example={example}
              explanation={explanation}
            />
          );
        })}
      </ListWrapper>
    </>
  );
}

const ListWrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(${props => props.rows}, 1fr);
  padding: 20px;
  list-style: none;
  gap: 30px;
  opacity: 0.9;
  transition: 0.2s;
`;
