import { MdCancel } from 'react-icons/md';
import styled from 'styled-components';
import DeleteMessageButton from './DeleteMessageButton';
import ScreenReaderOnly from './ScreenReaderOnly';

export default function DeleteMessage({ onConfirmDelete, onCancelDelete }) {
  return (
    <MessageOverlay>
      <MessageContent>
        <CloseMessageButton type="button" onClick={onCancelDelete}>
          <ScreenReaderOnly>close this message</ScreenReaderOnly>
        </CloseMessageButton>

        <h2>Bestätige das Löschen</h2>
        <p>Möchtest du diese Karteikarte wirklich löschen?</p>
        <MessageWindowWrapper>
          <DeleteMessageButton
            variant={'cancel'}
            type="button"
            onClick={onCancelDelete}
          >
            Nein <ScreenReaderOnly>cancel deleting this card</ScreenReaderOnly>
          </DeleteMessageButton>
          <DeleteMessageButton
            variant={'confirm'}
            type="button"
            onClick={onConfirmDelete}
          >
            Ja <ScreenReaderOnly>confirm deleting this card</ScreenReaderOnly>
          </DeleteMessageButton>
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
  width: 80%;
  margin: 30vh auto;
  background-color: rgba(255, 255, 255, 0.95);
  border-radius: 20px;
  position: relative;

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
const CloseMessageButton = styled.button.attrs(() => ({
  children: (
    <>
      <ScreenReaderOnly>toggle the card</ScreenReaderOnly>
      <MdCancel />
    </>
  ),
}))`
  all: unset;
  background: transparent;
  border: transparent;
  position: absolute;
  top: 10px;
  right: 15px;
  &:hover {
    color: crimson;
  }
`;
