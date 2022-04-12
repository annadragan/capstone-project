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

  const navigate = useNavigate();

  return (
    <>
      <Header>Form</Header>
      <Form
        autoComplete="off"
        onSubmit={handleSubmitTradition}
        aria-describedby="Describe a new tradition"
      >
        <ImageUpload>
          {photo ? (
            <img
              src={photo}
              alt=""
              style={{
                width: '70%',
              }}
            />
          ) : (
            <div>
              <input
                type="file"
                aria-label="upload your photo"
                onChange={upload}
                id="files"
              />
              <label htmlFor="files">
                Foto hochladen{' '}
                <FaCloudUploadAlt style={{ width: '25px', height: '25px' }} />
                <ScreenReaderOnly>upload your image</ScreenReaderOnly>
              </label>
            </div>
          )}
        </ImageUpload>
        <Input
          requiered
          type="text"
          name="tradition"
          placeholder="Beschreibe die Tradition..."
          maxLength="300"
          minLength="4"
          id="tradition"
        />
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

    if (newTradition.length >= 4) {
      onCreateTradition(photo, newTradition);
      navigate('/traditions');
      form.reset();
    }
  }
}

const ImageUpload = styled.div`
  margin: 5px;
  padding: 5px;

  input[type='file'] {
    opacity: 0;
    z-index: -1;
    position: absolute;
    top: -1px;
    left: 0;
    width: 0.1px;
    height: 0.1px;
    user-select: none;
  }

  label[for='files'] {
    background-color: hsl(220, 15%, 35%);
    padding: 10px;

    color: #fff;
    border-radius: 8px;
  }

  label[for='files']:hover {
    background-color: #d70761;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
