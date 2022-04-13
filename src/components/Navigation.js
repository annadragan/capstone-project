import { IconContext } from 'react-icons';
import { BsFillBookmarkCheckFill } from 'react-icons/bs';
import { GiCardRandom, GiDreamCatcher } from 'react-icons/gi';
import { GrBlockQuote } from 'react-icons/gr';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export default function Navigation() {
  return (
    <Nav>
      <LinkStyled to="/">
        <IconContext.Provider value={{ size: '40px' }}>
          <GiCardRandom />
        </IconContext.Provider>
      </LinkStyled>
      <LinkStyled to="/archive">
        <IconContext.Provider value={{ size: '32px' }}>
          <BsFillBookmarkCheckFill />
        </IconContext.Provider>
      </LinkStyled>
      <LinkStyled to="/idioms">
        <IconContext.Provider value={{ size: '32px' }}>
          <GrBlockQuote />
        </IconContext.Provider>
      </LinkStyled>
      <LinkStyled to="/traditions">
        <IconContext.Provider value={{ size: '32px' }}>
          <GiDreamCatcher />
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
