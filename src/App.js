import { nanoid } from 'nanoid';
import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import { useLocalStorage } from 'usehooks-ts';
import Form from './components/Form';
import Header from './components/Header';
import Navigation from './components/Navigation';
import BookmarkArchive from './pages/BookmarkArchive';
import VocabularyCards from './pages/VocabularyCards';
import IdiomaticExpressions from './pages/IdiomaticExpressions';
import Traditions from './pages/Traditions';
import ImageForm from './components/ImageForm';

function App() {
  const [vocabulary, setVocabulary] = useLocalStorage('dictionary', []);
  const [stories, setStories] = useLocalStorage('chronicle', []);

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
                onEditCard={handleEditTerm}
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
                onEditCard={handleEditTerm}
              />
            }
          />
          <Route path="/idioms" element={<IdiomaticExpressions />} />

          <Route
            path="/create"
            element={<ImageForm onCreateTradition={handleSubmitTradition} />}
          />
          <Route
            path="/traditions"
            element={
              <Traditions
                stories={stories}
                onDeleteTradition={handleDeleteTradition}
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

    setVocabulary([newWord, ...vocabulary]);
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

  function handleEditTerm(updatedTerm) {
    const newTerm = vocabulary.map(card => {
      if (card._id === updatedTerm._id) {
        const newCardTerm = { ...card, ...updatedTerm };
        return newCardTerm;
      }
      return card;
    });
    setVocabulary(newTerm);
  }

  function handleSubmitTradition(title, photo, tradition) {
    const newStory = {
      _id: nanoid(),
      title,
      photo,
      tradition,
    };

    setStories([newStory, ...stories]);
  }

  function handleDeleteTradition(customId) {
    setStories(stories.filter(story => story._id !== customId));
  }
}

export default App;

const AppWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 0;
`;
