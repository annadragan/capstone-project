import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export default function Navigation() {
  return (
    <Nav>
      <LinkStyled to="/vocabularycards">Vocabulary Cards</LinkStyled>
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
