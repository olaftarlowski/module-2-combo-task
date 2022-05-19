import { Button, Input, Textarea } from "components/Task4/Form";

const styles = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  alignItems: "center",
  width: "50%",
};

const formSubmitHandler = (e) => {
  e.preventDefault();
};

const Form = () => {
  return (
    <form onSubmit={formSubmitHandler} style={styles}>
      <Button bgColor="#eb4d4b" color="#c7ecee" icon="user">
        Click me
      </Button>
      <Input
        bgColor="#eb4d4b"
        color="#c7ecee"
        borderRadius="4px"
        borderColor="white"
        borderSize="3px"
      />
      <Textarea
        bgColor="#eb4d4b"
        color="#c7ecee"
        borderRadius="3px"
        borderColor="white"
        borderSize="3px"
      />
    </form>
  );
};

export default Form;
