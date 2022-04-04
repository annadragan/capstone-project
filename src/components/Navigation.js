import { IconContext } from 'react-icons';
import { BsFillBookmarkCheckFill } from 'react-icons/bs';
import { GiCardRandom } from 'react-icons/gi';
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
