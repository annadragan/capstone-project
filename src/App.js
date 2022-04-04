import { nanoid } from 'nanoid';
import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import { useLocalStorage } from 'usehooks-ts';
import Form from './components/Form';
import Header from './components/Header';
import Navigation from './components/Navigation';
import BookmarkArchive from './pages/BookmarkArchive';
import VocabularyCards from './pages/VocabularyCards';

function App() {
  const [vocabulary, setVocabulary] = useLocalStorage('dictionary', []);

  return (
    <>
      <AppWrapper>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <VocabularyCards
                vocabulary={vocabulary}
                onDeleteCard={handleDeleteTerm}
                onBookmarkCard={handleBookmarkTerm}
              />
            }
          />
          <Route
            path="/form"
            element={<Form onCreateTerm={handleSubmitTerm} />}
          />
          <Route
            path="/archive"
            element={
              <BookmarkArchive
                vocabulary={vocabulary}
                onDeleteCard={handleDeleteTerm}
                onBookmarkCard={handleBookmarkTerm}
              />
            }
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
      isBookmarked: false,
    };

    setVocabulary([...vocabulary, newWord]);
  }

  function handleDeleteTerm(lexemId) {
    setVocabulary(vocabulary.filter(phrase => phrase._id !== lexemId));
  }

  function handleBookmarkTerm(bookmarkId) {
    setVocabulary(
      vocabulary.map(card => {
        if (card._id === bookmarkId) {
          return { ...card, isBookmarked: !card.isBookmarked };
        } else {
          return card;
        }
      })
    );
  }
}

export default App;

const AppWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 0;
`;
