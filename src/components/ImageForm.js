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
        <Input
          labelText="Überschrift"
          type="text"
          name="title"
          placeholder="Nenne die Tradition..."
          maxLength="20"
          id="title"
        />
        <Input
          required
          labelText="Beschreibung der Tradition*"
          type="text"
          name="tradition"
          placeholder="Beschreibe die Tradition..."
          maxLength="300"
          minLength="4"
          id="tradition"
        />
        <ImageWrapper>
          <ImageUpload>
            {photo ? (
              <Div>
                <Image src={photo} alt="" />
              </Div>
            ) : (
              <Test>
                <input
                  type="file"
                  aria-label="upload your photo"
                  onChange={upload}
                  id="files"
                />
                <label htmlFor="files">
                  Foto hochladen{' '}
                  {loading && <UploadingText>{process}%</UploadingText>}
                  <FaCloudUploadAlt
                    style={{
                      width: '25px',
                      height: '25px',
                    }}
                  />
                  <ScreenReaderOnly>upload your image</ScreenReaderOnly>
                </label>
              </Test>
            )}
          </ImageUpload>
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
          let percent = Math.round(
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

const ImageUpload = styled.div`
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
    position: relative;
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

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 5px;
  width: 90%;
`;

const Image = styled.img`
  width: 70%;
`;

const Test = styled.label`
  display: flex;
  flex-direction: column;
`;

const UploadingText = styled.p``;

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
