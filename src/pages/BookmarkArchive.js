import Fuse from 'fuse.js';
import { useState } from 'react';
import { BsShieldFillCheck } from 'react-icons/bs';
import styled from 'styled-components';
import Card from '../components/Card';
import Header from '../components/Header';
import ScrollUp from '../components/ArrowButton';
import Searchbar from '../components/Searchbar';

export default function BookmarkArchive({
  vocabulary,
  onBookmarkCard,
  onDeleteCard,
  onEditCard,
  onScrollUp,
  backToTop,
}) {
  const [searchValue, setSearchValue] = useState('');

  const bookmarkedList = vocabulary.filter(card => card.isBookmarked === true);

  const fuse = new Fuse(bookmarkedList, {
    keys: ['word'],
  });

  const searchResult = fuse.search(searchValue);

  const notInlcudedInSearch = bookmarkedList.filter(list => {
    const isNotIncluded = !searchResult.some(result => result._id === list._id);
    return isNotIncluded;
  });

  const sortedArrayAfterSearch =
    searchResult.length > 0
      ? [...searchResult, ...notInlcudedInSearch]
      : bookmarkedList;

  return (
    <>
      <Header>
        <BsShieldFillCheck
          style={{
            width: '32px',
            height: '32px',
            color: '#4C5567',
          }}
        />
        <Break
          style={{
            wordBreak: 'break-word',
          }}
        ></Break>
        Archiv
      </Header>
      {bookmarkedList.length === 0 && (
        <>
          <Text>
            Hierhin kannst du die Vokabelkärtchen verschieben, die du dir
            bereits gut gemerkt hast, um sie nicht zu verlieren. Wenn du eine
            Abwechslung brauchst kannst du ein paar Redewendungen auf der
            nächsten Seite kennenlernen. Sie werden häufig in Gesprächen, Filmen
            und Büchern verwendet und sie zu verstehen gehört bei der
            Sprachentwicklung einfach dazu!
          </Text>
        </>
      )}
      {bookmarkedList.length >= 1 && (
        <Searchbar
          vocabulary={vocabulary}
          onSearch={handleSearch}
          value={searchValue}
        />
      )}
      <ListWrapper>
        {sortedArrayAfterSearch.map(
          ({ _id, word, example, explanation, isBookmarked }) => (
            <Card
              key={_id}
              word={word}
              example={example}
              explanation={explanation}
              _id={_id}
              onBookmarkCard={onBookmarkCard}
              isBookmarked={isBookmarked}
              onDeleteCard={() => onDeleteCard(_id)}
              onEditCard={onEditCard}
            />
          )
        )}
      </ListWrapper>
      <ScrollUp onClick={onScrollUp} hidden={backToTop} />
    </>
  );

  function handleSearch(event) {
    event.preventDefault();
    const input = event.target.value.toLowerCase();
    setSearchValue(input);
  }
}

const Text = styled.p`
  padding: 20px;
  text-align: center;
`;

const ListWrapper = styled.ul`
  display: grid;
  justify-items: center;
  padding-left: 0;
  list-style: none;
  gap: 30px;
  transition: 0.2s;
  opacity: 0.9;
`;

const Break = styled.div`
  margin-top: -16px;
`;
