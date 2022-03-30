import styled from 'styled-components';
import { BsPatchPlusFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

export default function VocabularyCards({ vocabulary }) {
  return (
    <>
      <Wrapper>
        This is my future vocabulary page
        <ul>
          {vocabulary?.map(singleVoc => (
            <li key={singleVoc._id}> {singleVoc.word}</li>
          ))}
        </ul>
        <Link to={'/form'}>
          {' '}
          <PlusButton type="button" />
        </Link>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.section``;

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
