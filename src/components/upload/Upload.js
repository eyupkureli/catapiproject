import React from "react";
import { Button, Label, Input, Container } from "reactstrap";

const Upload = (props) => {
  return (
    <Container style={{ backgroundColor: "#f1f1f1", marginBottom: "3rem" }}>
      <Label style = {{padding : "1rem"}}>
        <Input type="file" name="file" id="exampleFile" />
      </Label>
      <Button color="secondary" style ={{float : "right", margin : "1rem"}}>
        Upload
      </Button>
    </Container>
  );
};

export default Upload;
