import styled from "styled-components";

const NavWrapper = styled.nav`
  border: 1px solid white;
  display: flex;
  align-items: start;
  flex-direction: column;
  max-width: 300px;
  height: fit-content;

  ul {
    margin: 0;
    padding: 0;
  }
`;

const Menu = ({ children }) => {
  return (
    <NavWrapper>
      <ul>{children}</ul>
    </NavWrapper>
  );
};

export default Menu;
