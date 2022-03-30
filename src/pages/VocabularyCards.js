import styled from 'styled-components';
import { BsPatchPlusFill } from 'react-icons/bs';

export default function VocabularyCards() {
  return (
    <>
      <Wrapper>
        This is my future vocabulary page
        <PlusButton type="button" />
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
