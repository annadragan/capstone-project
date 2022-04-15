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
      <CardPhoto
        src={photo}
        srcset="large.jpg 1024w, medium.jpg 512w, small.jpg 256w"
        sizes="(max-width: 30em) 30em, 100vw"
        alt=""
      ></CardPhoto>
      <CardTitle>{title}</CardTitle>
      {about && (
        <div>
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
      <ToggleButton
        type="button"
        onClick={() => setAbout(!about)}
        aria-label="toggle the card"
      />
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

const ToggleButton = styled.button.attrs(() => ({
  children: (
    <>
      <ScreenReaderOnly>toggle the card</ScreenReaderOnly>
      <FaChevronCircleDown style={{ width: '20px', height: '20px' }} />
    </>
  ),
}))`
  all: unset;
  background: transparent;
  border: transparent;
  position: absolute;
  bottom: 12px;
  left: 150px;
  margin-bottom: -18px;
  &:hover {
    color: crimson;
  }
`;
