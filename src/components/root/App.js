import React from "react";
import { Container} from "reactstrap";
import Navi from "../navi/Navi";
import Cats from "../cats/Cats";
import Upload from "../upload/Upload";

function App() {
  return (
    <Container>
      <Navi></Navi>
      <br></br>
      <Cats></Cats>
      <br></br>
      <Upload></Upload>
    </Container>
  );
}

export default App;
