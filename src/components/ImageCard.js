import styled from 'styled-components';
import { useState } from 'react';
import DeleteMessage from './DeleteMessage';
import IconButton from './IconButton';
import ScreenReaderOnly from './ScreenReaderOnly';
import { BsTrash } from 'react-icons/bs';

export default function ImageCard({
  tradition,
  photo,
  onDeleteTradition,
  _id,
}) {
  const [showMessage, setShowMessage] = useState(false);
  return (
    <>
      <CardWrapper>
        <CardPhoto src={photo}></CardPhoto>
        <CardTradition>{tradition}</CardTradition>
        <IconButton
          type="button"
          aria-label="delete this card"
          _id={_id}
          onClick={() => setShowMessage(true)}
          variant="trash"
        >
          <BsTrash style={{ width: '25px', height: '25px' }} />
          <ScreenReaderOnly>delete this card</ScreenReaderOnly>
        </IconButton>
        {showMessage && (
          <DeleteMessage
            onConfirmDelete={() => onDeleteTradition(_id)}
            onCancelDelete={() => setShowMessage(false)}
          />
        )}
      </CardWrapper>
    </>
  );
}

const CardWrapper = styled.li`
  background-color: hsl(220, 15%, 35%);
  display: flex;
  flex-direction: column;
  word-wrap: break-word;
  width: 300px;
  gap: 10px;
  padding: 20px;
  border-radius: 14px;
  margin-top: 50px;
  border-top: 16px solid #d70761;
  position: relative;
`;

const CardPhoto = styled.img`
  border-radius: 12px;
`;

const CardTradition = styled.p`
  color: white;
  margin-left: 0;
  font-style: italic;
  padding: 4px;
  list-style: none;
`;
