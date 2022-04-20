import styled from 'styled-components';
import ImageCard from './ImageCard';

export default function ImageCardList({
  stories,
  onCreateTradition,
  onDeleteTradition,
}) {
  return (
    <>
      <ListWrapper
        role="list"
        aria-label="Liste von Karteikarten über die Traditionen"
      >
        {stories?.map(({ _id, title, tradition, photo }) => {
          return (
            <ImageCard
              key={_id}
              title={title}
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
  list-style: none;
  gap: 30px;
  opacity: 0.9;
  transition: 0.2s;
`;
