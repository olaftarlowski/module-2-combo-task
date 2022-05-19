import "./App.css";
import HrLine from "components/HrLine";
import { Task1, Task2, Task3, Task3v2 } from "components/index-tasks";
import Form from "components/Task4/Form/Form";
import Card from "components/Task4/Card/Card";

const styles = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
  width: "50%",
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Card
          title="Shrim and Chorizo Paella"
          intro="This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."
          showMore
          content="Method: Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes...."
        />
        <Form />
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
