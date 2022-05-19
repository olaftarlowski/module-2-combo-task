import "./App.css";
import HrLine from "components/HrLine";
import { Task1, Task2, Task3, Task3v2 } from "components/index-tasks";
import Form from "components/Task4/Form/Form";
import Card from "components/Task4/Card/Card";
import Menu from "components/Task4/Menu/Menu";
import MenuLink from "components/Task4/Menu/MenuLink";

const styles = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
  width: "50%",
};

const styles2 = {
  width: "100%",
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  justifyItems: "center",
  alignItems: "center",
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div style={styles2}>
          <Menu>
            <MenuLink to="/">Home</MenuLink>
            <MenuLink to="/about">About</MenuLink>
            <MenuLink to="/contact" isActive>
              Contact
            </MenuLink>
            <MenuLink to="/posts">Posts</MenuLink>
          </Menu>
          <Card
            title="Shrim and Chorizo Paella"
            intro="This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."
            showMore
            content="Method: Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes...."
          />
          <Form />
        </div>
        <HrLine />
        <Task1 />
        <HrLine />
        <Task2 />
        <HrLine />
        <div style={styles}>
          <Task3 />
          <Task3v2 />
        </div>
      </header>
    </div>
  );
}

export default App;
