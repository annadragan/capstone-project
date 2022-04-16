import { IconContext } from 'react-icons';
import { BsFillBookmarkCheckFill } from 'react-icons/bs';
import { GiCardRandom, GiDreamCatcher } from 'react-icons/gi';
import { GrBlockQuote } from 'react-icons/gr';
import { GoHome } from 'react-icons/go';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import ScreenReaderOnly from '../components/ScreenReaderOnly';

export default function Navigation() {
  return (
    <Nav>
      <LinkStyled to="/home">
        <IconContext.Provider value={{ size: '32px' }}>
          <GoHome />
          <ScreenReaderOnly>home</ScreenReaderOnly>
        </IconContext.Provider>
      </LinkStyled>
      <LinkStyled to="/">
        <IconContext.Provider value={{ size: '40px' }}>
          <GiCardRandom />
          <ScreenReaderOnly>Vokabelkärtchen Seite</ScreenReaderOnly>
        </IconContext.Provider>
      </LinkStyled>
      <LinkStyled to="/archive">
        <IconContext.Provider value={{ size: '32px' }}>
          <BsFillBookmarkCheckFill />
          <ScreenReaderOnly>Archive Seite</ScreenReaderOnly>
        </IconContext.Provider>
      </LinkStyled>
      <LinkStyled to="/idioms">
        <IconContext.Provider value={{ size: '32px' }}>
          <GrBlockQuote />
          <ScreenReaderOnly>Redewendungen Seite</ScreenReaderOnly>
        </IconContext.Provider>
      </LinkStyled>
      <LinkStyled to="/traditions">
        <IconContext.Provider value={{ size: '32px' }}>
          <GiDreamCatcher />
          <ScreenReaderOnly>Traditionen Seite</ScreenReaderOnly>
        </IconContext.Provider>
      </LinkStyled>
    </Nav>
  );
}

const LinkStyled = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: white;
  width: 100%;

  &.active {
    background: #d70761;
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  height: 48px;
  background: hsl(220, 15%, 35%);
  position: fixed;
  bottom: 0;
  width: 100%;
`;
