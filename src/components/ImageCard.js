import styled from 'styled-components';
import { useState } from 'react';
import DeleteMessage from './DeleteMessage';
import IconButton from './IconButton';
import ScreenReaderOnly from './ScreenReaderOnly';
import { BsTrash } from 'react-icons/bs';

export default function ImageCard({
  title,
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
        <CardTitle>{title}</CardTitle>
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

const CardTitle = styled.h2`
  color: white;
  margin-left: 0;
  padding: 4px;
  font-weight: bold;
  font-size: 1.4rem;
  display: flex;
  justify-content: center;
`;

const CardPhoto = styled.img`
  border-radius: 12px;
  width: 100%;
  margin: 10px 0;
`;

const CardTradition = styled.p`
  color: white;
  margin-left: 0;
  padding: 4px;
`;
