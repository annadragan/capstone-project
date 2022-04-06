import { BsPatchPlusFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import CardList from '../components/CardList';
import Header from '../components/Header';

export default function VocabularyCards({
  vocabulary,
  onDeleteCard,
  onBookmarkCard,
  onEditCard,
}) {
  return (
    <>
      <Header>Vocabulary Cards</Header>
      <CardList
        vocabulary={vocabulary}
        onDeleteCard={onDeleteCard}
        onBookmarkCard={onBookmarkCard}
        onEditCard={onEditCard}
        // onConfirmDelete={onDeleteCard}
      />
      <Link to={'/form'}>
        <PlusButton
          type="button"
          aria-label="go to create a card-form button"
        />
      </Link>
    </>
  );
}

const PlusButton = styled.button.attrs(() => ({
  children: <BsPatchPlusFill style={{ width: '35px', height: '35px' }} />,
}))`
  position: fixed;
  bottom: 56px;
  right: 16px;
  z-index: 2;
  background: transparent;
  border: transparent;
  &:hover {
    color: crimson;
  }
`;
