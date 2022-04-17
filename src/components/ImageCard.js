import { useState } from 'react';
import { BsTrash } from 'react-icons/bs';
import { IoIosArrowDropdown, IoIosArrowDropup } from 'react-icons/io';
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
            <BsTrash style={{ width: '25px', height: '25px' }} />
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
      >
        <ScreenReaderOnly>show more / show less</ScreenReaderOnly>
        {/* {!about ? 'Show more ' : 'Show less '} */}
        {!about ? (
          <IoIosArrowDropdown style={{ width: '25px', height: '25px' }} />
        ) : (
          <IoIosArrowDropup style={{ width: '25px', height: '25px' }} />
        )}
      </ToggleButton>
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
  box-shadow: rgba(0, 0, 0, 0.12) 0px 6px 16px;
`;

const CardTitle = styled.h2`
  font-weight: bold;
  font-size: 1.4rem;
  display: flex;
  justify-content: center;
  margin: 0;
  padding-top: 0;
`;

const CardPhoto = styled.img`
  border-radius: 12px;
  width: 100%;
`;

const CardTradition = styled.p`
  /* color: white; */
`;

const ToggleButton = styled.button`
  background: transparent;
  border: transparent;
  position: absolute;
  bottom: 12px;
  display: flex;
  justify-content: center;
  margin-bottom: -15px;
  &:hover {
    color: crimson;
  }
`;
