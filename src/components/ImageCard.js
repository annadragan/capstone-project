import { useState } from 'react';
import { BsTrash } from 'react-icons/bs';
import { FaChevronCircleDown } from 'react-icons/fa';
import styled from 'styled-components';
import DeleteMessage from './DeleteMessage';
import IconButton from './IconButton';
import ScreenReaderOnly from './ScreenReaderOnly';

export default function ImageCard({
  title,
  tradition,
  photo,
  onDeleteTradition,
  _id,
}) {
  const [showMessage, setShowMessage] = useState(false);
  const [about, setAbout] = useState(false);

  return (
    <CardWrapper>
      <CardPhoto src={photo}></CardPhoto>
      {about && (
        <div>
          <CardTitle>{title}</CardTitle>
          <CardTradition>{tradition}</CardTradition>
          <IconButton
            type="button"
            onClick={() => setShowMessage(true)}
            variant="trash"
          >
            <BsTrash style={{ width: '35px', height: '35px' }} />
            <ScreenReaderOnly>delete this card</ScreenReaderOnly>
          </IconButton>
          {showMessage && (
            <DeleteMessage
              onConfirmDelete={() => onDeleteTradition(_id)}
              onCancelDelete={() => setShowMessage(false)}
            />
          )}
        </div>
      )}
      <ToggleButtonWrapper type="button" onClick={() => setAbout(!about)} />
    </CardWrapper>
  );
}

const CardWrapper = styled.li`
  background-color: hsl(220, 15%, 35%);
  display: flex;
  flex-direction: column;
  word-wrap: break-word;
  width: 300px;
  padding: 20px;
  border-radius: 14px;
  border-top: 16px solid #d70761;
  position: relative;
`;

const CardTitle = styled.h2`
  color: white;
  font-weight: bold;
  font-size: 1.4rem;
  display: flex;
  justify-content: center;
`;

const CardPhoto = styled.img`
  border-radius: 12px;
  width: 100%;
`;

const CardTradition = styled.p`
  color: white;
`;

const ToggleButtonWrapper = styled.button.attrs(() => ({
  children: (
    <>
      <ScreenReaderOnly>toggle the card</ScreenReaderOnly>
      <FaChevronCircleDown />
    </>
  ),
}))`
  all: unset;
  background: transparent;
  border: transparent;

  padding-top: 3px;
  margin-bottom: -20px;
  &:hover {
    color: crimson;
  }
  &:focus:focus-visible {
    outline: 2px dashed;
  }
`;
