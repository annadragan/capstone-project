import axios from 'axios';
import { useState } from 'react';
import { FaCloudUploadAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from './Button';
import Header from './Header';
import Input from './Input';
import ScreenReaderOnly from './ScreenReaderOnly';

const CLOUDNAME = process.env.REACT_APP_CLOUDINARY_CLOUDNAME;
const PRESET = process.env.REACT_APP_CLOUDINARY_PRESET;

export default function ImageForm({ onCreateTradition }) {
  const [photo, setPhoto] = useState('');
  const [loading, setLoading] = useState(false);
  const [process, setProcess] = useState(0);

  const navigate = useNavigate();

  return (
    <>
      <Header>Form</Header>
      <Form
        autoComplete="off"
        onSubmit={handleSubmitTradition}
        aria-describedby="Describe a new tradition"
      >
        <InputWrapper>
          <Input
            labelText="Überschrift"
            type="text"
            name="title"
            placeholder="Nenne die Tradition..."
            maxLength="20"
            id="title"
            required
            rows={1}
            columns={10}
          />
        </InputWrapper>
        <InputWrapper>
          <Input
            required
            labelText="Beschreibung der Tradition*"
            type="text"
            name="tradition"
            placeholder="Beschreibe die Tradition..."
            maxLength="300"
            minLength="4"
            id="tradition"
            rows={7}
            columns={10}
          />
        </InputWrapper>
        <ImageWrapper>
          {photo ? (
            <UploadedImageWrapper>
              <Image
                src={photo}
                alt=""
                srcset="large.jpg 1024w, medium.jpg 512w, small.jpg 256w"
                sizes="(max-width: 30em) 30em, 100vw"
              />
            </UploadedImageWrapper>
          ) : (
            <Wrapper>
              <ImageInput
                type="file"
                aria-label="preview of uploaded photo"
                onChange={upload}
                id="files"
              />
              <ImageLabel htmlFor="files">
                Foto hochladen {loading && <p>{process}%</p>}
                <FaCloudUploadAlt
                  style={{
                    width: '25px',
                    height: '25px',
                  }}
                />
                <ScreenReaderOnly>upload your image</ScreenReaderOnly>
              </ImageLabel>
            </Wrapper>
          )}
        </ImageWrapper>
        <Button category="Save" />
      </Form>
    </>
  );

  function upload(event) {
    const url = `https://api.cloudinary.com/v1_1/${CLOUDNAME}/upload`;
    const formData = new FormData();
    formData.append('file', event.target.files[0]);
    formData.append('upload_preset', PRESET);

    axios
      .post(url, formData, {
        headers: {
          'Content-type': 'multipart/form-data',
        },
        onUploadProgress: progressEvent => {
          setLoading(true);
          const percent = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          setProcess(percent);
        },
      })
      .then(onPhotoSubmit)
      .catch(err => console.error(err));
  }

  function onPhotoSubmit(response) {
    setPhoto(response.data.url);
  }

  function handleSubmitTradition(event) {
    event.preventDefault();
    const form = event.target;
    const newTradition = form.elements.tradition.value.trim();
    const newTitle = form.elements.title.value.trim();

    if (newTradition.length >= 4) {
      onCreateTradition(newTitle, photo, newTradition);
      navigate('/traditions');
      form.reset();
    }
  }
}

const ImageInput = styled.input`
  opacity: 0;
  z-index: -1;
  position: absolute;
  top: -1px;
  left: 0;
  width: 0.1px;
  height: 0.1px;
  user-select: none;
`;

const ImageLabel = styled.label`
  background-color: hsl(220, 15%, 35%);
  padding: 10px;
  color: #fff;
  border-radius: 8px;
  position: relative;

  :hover {
    background-color: #d70761;
  }
`;

const Form = styled.form`
  display: grid;
  gap: 15px;
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 5px;
  width: 90%;
`;

const Image = styled.img`
  width: 60vw;
  height: auto;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const UploadedImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
