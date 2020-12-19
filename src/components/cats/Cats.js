import React, { Component } from "react";
import {
  Container,
  Row
} from "reactstrap";

import Cat from "./Cat";

class Cats extends Component {

  //state = { catList: [] };

  // componentDidMount() {
  //   var myHeaders = new Headers();
  //   myHeaders.append("x-api-key", "cdbfbcaf-5f5f-4abf-9f4d-fc5974aacf9c");

  //   var requestOptions = {
  //     method: "GET",
  //     headers: myHeaders,
  //     redirect: "follow",
  //   };

  //   fetch("https://api.thecatapi.com/v1/images?limit=100", requestOptions)
  //     .then((response) => response.json())
  //     .then((data) => this.setState({ catList: data }))
  //     .catch((error) => console.log("error", error));
  // }

  render() {
    return (
      <Container>

<Row xs="1" sm="2" md="4">
         
          {this.props.catList.map((cat) => (
          <Cat url={cat.url} id = {cat.id}/>
        ))}        
        </Row>
      </Container>

      
    );
  }
}

export default Cats;
