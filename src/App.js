import styled from 'styled-components';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import CardList from './components/CardList';
import Form from './components/Form';
import Navigation from './components/Navigation';
import VocabularyCards from './pages/VocabularyCards';
import Archive from './pages/Archive';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';

function App() {
  const [vocabulary, setVocabulary] = useState([]);

  return (
    <>
      <AppWrapper>
        <Header />
        <CardList vocabulary={vocabulary} />
        <Routes>
          {/* <Route path="/cards" element={} /> */}
          <Route
            path="/form"
            element={<Form onCreateTerm={handleSubmitTerm} />}
          />
          <Route
            path="/vocabularycards"
            element={
              <VocabularyCards
                onCreateTerm={handleSubmitTerm}
                vocabulary={vocabulary}
              />
            }
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
}

export default App;

const AppWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
