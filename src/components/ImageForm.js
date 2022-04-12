import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from './Button';
import Header from './Header';
import Input from './Input';

const CLOUDNAME = process.env.REACT_APP_CLOUDINARY_CLOUDNAME;
const PRESET = process.env.REACT_APP_CLOUDINARY_PRESET;

export default function ImageForm({ onCreateTradition }) {
  const [photo, setPhoto] = useState('');

  const navigate = useNavigate();

  return (
    <>
      <Header>Traditionen</Header>
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
            <input
              type="file"
              name="file"
              aria-label="upload your photo"
              onChange={upload}
              multiple="multiple"
            />
          )}
        </ImageUpload>
        <Input
          //   onChange={handleOnChange}
          requiered
          type="text"
          name="tradition"
          labelText="neue Tradition*"
          placeholder="Füge die Tradition hinzu..."
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
  input {
    width: 100%;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
