import styled from 'styled-components';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import CardList from './components/CardList';
import Form from './components/Form';
import Navigation from './components/Navigation';
import VocabularyCards from './pages/VocabularyCards';
import Archive from './pages/Archive';
import { Routes, Route } from 'react-router-dom';

function App() {
  const [vocabulary, setVocabulary] = useState([]);
  // const [switchPage, setSwitchPage] = useState(true);

  return (
    <>
      <AppWrapper>
        <h1>📚 Hello Capstone</h1>
        <CardList vocabulary={vocabulary} />
        <Form onCreateTerm={handleSubmitTerm} />
        <Routes>
          <Route
            path="/"
            element={<VocabularyCards onCreateTerm={handleSubmitTerm} />}
          />
          <Route path="/archive" element={<Archive />} />
        </Routes>
        <Navigation />
      </AppWrapper>
    </>
  );

  function handleSubmitTerm(word, example, explanation) {
    const newWord = {
      _id: nanoid(),
      word,
      example,
      explanation,
    };

    setVocabulary([...vocabulary, newWord]);
  }
  // function handleSwitchPage() {
  //   setSwitchPage(!switchPage);
  // }
}

export default App;

const AppWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
