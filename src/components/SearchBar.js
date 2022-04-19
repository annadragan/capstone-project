import styled from 'styled-components';
// import { BiSearchAlt2 } from 'react-icons/bi';
import ScreenReaderOnly from './ScreenReaderOnly';

export default function Searchbar({ value, onSearch }) {
  return (
    <SearchbarWrapper>
      {/* <BiSearchAlt2 style={{ width: '25px', height: '25px' }} /> */}
      <InputLabel htmlFor="searchInput">
        <ScreenReaderOnly>Suche nach dem Wort</ScreenReaderOnly>
      </InputLabel>
      <InputField
        type="search"
        id="searchInput"
        name="searchInput"
        maxLength={20}
        placeholder="Finde dein Wort..."
        value={value}
        onChange={onSearch}
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
  border: 1px solid #555;
  display: block;
  background: transparent
    url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' class='bi bi-search' viewBox='0 0 16 16'%3E%3Cpath d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z'%3E%3C/path%3E%3C/svg%3E")
    no-repeat 140px;
  &:focus {
    outline: none;
    border-color: crimson;
  }
`;
