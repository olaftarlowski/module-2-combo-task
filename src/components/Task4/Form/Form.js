import { Button, Input, Textarea } from "components/Task4/Form";

const styles = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  alignItems: "center",
  width: "50%",
};

const Form = () => {
  const formSubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={formSubmitHandler} style={styles}>
      <Button bgColor="alizarin" color="clouds" icon="user">
        Click me
      </Button>
      <Input
        bgColor="alizarin"
        color="clouds"
        borderRadius="4px"
        borderColor="white"
        borderSize="3px"
      />
      <Textarea
        bgColor="alizarin"
        color="clouds"
        borderRadius="3px"
        borderColor="white"
        borderSize="3px"
      />
    </form>
  );
};

export default Form;
