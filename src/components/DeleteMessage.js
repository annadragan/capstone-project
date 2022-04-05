import styled from 'styled-components';
import ScreenReaderOnly from './ScreenReaderOnly';

export default function DeleteMessage({ onConfirmDelete, onCancelDelete }) {
  return (
    <MessageOverlay>
      <MessageContent>
        <h2>Confirm Delete Request</h2>
        <p>Do you really want to delete this card?</p>
        <MessageWindowWrapper>
          <MessageCancelButton type="button" onClick={onCancelDelete}>
            No <ScreenReaderOnly>cancel deleting this card</ScreenReaderOnly>
          </MessageCancelButton>
          <MessageDeleteButton type="button" onClick={onConfirmDelete}>
            Yes <ScreenReaderOnly>confirm deleting this card</ScreenReaderOnly>
          </MessageDeleteButton>
        </MessageWindowWrapper>
      </MessageContent>
    </MessageOverlay>
  );
}

const MessageOverlay = styled.div`
  position: fixed;
  background-color: rgba(49, 49, 49, 0.3);
  inset: 0;
  z-index: 1;
`;

const MessageContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  width: 60%;
  margin: 30vh auto;
  background-color: rgba(255, 255, 255, 0.95);
  border-radius: 20px;

  h2 {
    padding-top: 5px;
    font-size: 1rem;
  }
  p {
    font-size: 0.8rem;
    white-space: no-wrap;
  }
`;

const MessageWindowWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
`;

const MessageCancelButton = styled.button`
  background-color: green;
  padding: 8px 20px;
  border-radius: 12px;
  transition-duration: 0.3s;
  color: #fff;
  font-size: 1rem;
  width: 30%;
  border: none;
  align-self: center;
  display: flex;
  justify-content: center;
  &:hover {
    background-color: #3d9816;
  }
`;

const MessageDeleteButton = styled.button`
  color: #fff;
  background-color: #e52b50;
  padding: 8px 20px;
  border-radius: 12px;
  border: none;
  font-size: 1rem;
  width: 30%;
  align-self: center;
  transition-duration: 0.3s;
  display: flex;
  justify-content: center;
  &:hover {
    background-color: red;
  }
`;
