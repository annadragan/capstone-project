import { IoIosCloseCircleOutline } from 'react-icons/io';
import styled from 'styled-components';
import DeleteMessageButton from './DeleteMessageButton';
import ScreenReaderOnly from './ScreenReaderOnly';

export default function DeleteMessage({ onConfirmDelete, onCancelDelete }) {
  return (
    <MessageOverlay>
      <MessageContent>
        <CloseMessageButton type="button" onClick={onCancelDelete}>
          <ScreenReaderOnly>Benachrichtigung schließen</ScreenReaderOnly>
        </CloseMessageButton>
        <h2>Löschen bestätigen</h2>
        <p>Möchtest du diese Karteikarte wirklich löschen?</p>
        <MessageWindowWrapper>
          <DeleteMessageButton
            variant={'cancel'}
            type="button"
            onClick={onCancelDelete}
          >
            Nein
          </DeleteMessageButton>
          <DeleteMessageButton
            variant={'confirm'}
            type="button"
            onClick={onConfirmDelete}
          >
            Ja
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
  width: 82%;
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
      <ScreenReaderOnly>Benachrichtigung schließen</ScreenReaderOnly>
      <IoIosCloseCircleOutline style={{ width: '30px', height: '30px' }} />
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
