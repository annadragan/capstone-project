import styled from 'styled-components';
import { BiSearchAlt2 } from 'react-icons/bi';
import ScreenReaderOnly from './ScreenReaderOnly';

export default function Searchbar() {
  return (
    <SearchbarWrapper>
      <span>
        <BiSearchAlt2 style={{ width: '25px', height: '25px' }} />
        <ScreenReaderOnly>Suche nach dem Wort</ScreenReaderOnly>
      </span>
      <InputLabel htmlFor="searchInput">Finde dein Wort...</InputLabel>
      <InputField
        type="search"
        id="searchInput"
        name="searchInput"
        maxLength={20}
        placeholder="Suche..."
        //   value={searchValue}
        //   onChange={handleSearch}
        pattern="^[a-zA-Z]+"
      ></InputField>
    </SearchbarWrapper>
  );
}

const SearchbarWrapper = styled.div`
  border-radius: 9px;
  padding: 5px;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const InputLabel = styled.label`
  padding: 5px;
  display: none;
`;

const InputField = styled.input`
  color: grey;
  padding: 5px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:focus {
    outline: none;
    border-color: hotpink;
  }
`;
