import { BsPatchPlusFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import CardList from '../components/CardList';
import Header from '../components/Header';

export default function VocabularyCards({ vocabulary }) {
  return (
    <>
      <div>
        <Header>Vocabulary Cards</Header>
        <CardList />
        {/* <ul>
          {vocabulary?.map(singleVoc => (
            <li key={singleVoc._id}> {singleVoc.word}</li>
          ))}
        </ul> */}
        <Link to={'/form'}>
          {' '}
          <PlusButton type="button" />
        </Link>
      </div>
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
