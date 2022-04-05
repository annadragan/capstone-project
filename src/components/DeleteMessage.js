import styled from 'styled-components';

export default function DeleteMessage({
  onConfirmDelete,
  onCancelDelete,
  _id,
}) {
  return (
    <>
      <MessageContainer>
        <h2>Confirm Delete Request</h2>
        <p>Do you relly want to delete this card?</p>
        <PopUpWindowWrapper>
          <MessageCancelButton type="button" onClick={onCancelDelete}>
            No
          </MessageCancelButton>
          <MessageDeleteButton
            type="button"
            onClick={onConfirmDelete}
            _id={_id}
          >
            Yes
          </MessageDeleteButton>
        </PopUpWindowWrapper>
      </MessageContainer>
    </>
  );
}

const MessageContainer = styled.div`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.5);
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 1;
`;

const PopUpWindowWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
`;

const MessageCancelButton = styled.button`
  background-color: azure;
  padding: 5px;
  border-radius: 12px;
  p {
    font-size: 0.75rem;
  }
`;

const MessageDeleteButton = styled.button`
  color: #fff;
  background-color: red;
  padding: 5px;
  border-radius: 12px;
  p {
    font-size: 0.75rem;
  }
`;
