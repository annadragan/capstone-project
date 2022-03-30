import styled from 'styled-components';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import CardList from './components/CardList';
import Form from './components/Form';

function App() {
  const [vocabulary, setVocabulary] = useState([]);

  return (
    <>
      <AppWrapper>
        <h1>📚 Hello Capstone Project</h1>
        <CardList vocabulary={vocabulary} />
        <Form onCreateTerm={handleSubmitTerm} />
      </AppWrapper>
    </>
  );

  function handleSubmitTerm(word) {
    const newWord = {
      _id: nanoid(),
      word,
    };

    setVocabulary([...vocabulary, newWord]);
  }
}

export default App;

const AppWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
