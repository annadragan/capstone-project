import styled from 'styled-components';
import ImageCard from './ImageCard';

export default function ImageCardList({
  stories,
  onCreateTradition,
  onDeleteTradition,
}) {
  return (
    <>
      <ListWrapper role="list" aria-label="tradition cards list">
        {stories?.map(({ _id, tradition, photo }) => {
          return (
            <ImageCard
              key={_id}
              tradition={tradition}
              photo={photo}
              _id={_id}
              onCreateTradition={onCreateTradition}
              onDeleteTradition={onDeleteTradition}
            />
          );
        })}
      </ListWrapper>
    </>
  );
}

const ListWrapper = styled.ul`
  display: grid;
  justify-items: center;
  padding-left: 0;
  padding: 20px;
  list-style: none;
  gap: 10px;
  opacity: 0.9;
  transition: 0.2s;

  @media (min-width: 650px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 950px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;
