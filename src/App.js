import { nanoid } from 'nanoid';
import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Form from './components/Form';
import Header from './components/Header';
import Navigation from './components/Navigation';
import VocabularyCards from './pages/VocabularyCards';
import { useLocalStorage } from 'usehooks-ts';

function App() {
  const [vocabulary, setVocabulary] = useLocalStorage('dictionary', []);

  return (
    <>
      <AppWrapper>
        <Header />
        <Routes>
          <Route
            path="/"
            element={<VocabularyCards vocabulary={vocabulary} />}
          />
          <Route
            path="/form"
            element={<Form onCreateTerm={handleSubmitTerm} />}
          />
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
  padding: 60px 0;
`;
