import styled from "styled-components";

const MenuLinkWrapper = styled.li`
  background-color: ${(props) => (props.isActive ? "darksalmon" : " beige")};
  box-sizing: border-box;
  border: 1px solid #232323;
  display: inline-block;
  text-decoration: none;
  transition: 0.2s ease-out;
  width: 100%;

  a {
    color: #000;
    box-sizing: border-box;
    display: inline-block;
    padding: 10px 20px;
    text-decoration: none;
    width: 100%;
  }

  &:hover {
    background-color: bisque;
  }
`;

const MenuLink = ({ to, children, isActive }) => {
  return (
    <MenuLinkWrapper isActive={isActive}>
      <a href={to}>{children}</a>
    </MenuLinkWrapper>
  );
};

export default MenuLink;
