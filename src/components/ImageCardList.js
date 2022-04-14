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
        {stories?.map(({ _id, title, tradition, photo, isToggled }) => {
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

  @media (min-width: 640px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;
