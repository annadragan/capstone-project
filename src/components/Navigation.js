import { IconContext } from 'react-icons';
import { BsShieldFillCheck } from 'react-icons/bs';
import { GiCardRandom, GiPretzel } from 'react-icons/gi';
import { GoHome } from 'react-icons/go';
import { GrBlockQuote } from 'react-icons/gr';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import ScreenReaderOnly from '../components/ScreenReaderOnly';

export default function Navigation() {
  return (
    <Nav>
      <LinkStyled to="/">
        <IconContext.Provider value={{ size: '32px' }}>
          <GoHome />
          <ScreenReaderOnly>Startseite</ScreenReaderOnly>
        </IconContext.Provider>
      </LinkStyled>
      <LinkStyled to="/vocabel">
        <IconContext.Provider value={{ size: '40px' }}>
          <GiCardRandom />
          <ScreenReaderOnly>Vokabelkärtchen Seite</ScreenReaderOnly>
        </IconContext.Provider>
      </LinkStyled>
      <LinkStyled to="/archive">
        <IconContext.Provider value={{ size: '32px' }}>
          <BsShieldFillCheck />
          <ScreenReaderOnly>Archiv Seite</ScreenReaderOnly>
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
          <GiPretzel />
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
  border-radius: 9px;

  &.active {
    background: var(--color-pink);
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  height: 48px;
  border-radius: 9px 9px 3px 3px;
  background: var(--color-primary-gray);
  position: fixed;
  bottom: 0;
  width: 100%;
`;
