/* eslint-disable no-useless-constructor */
import React, { Component } from "react";
import {
  Card,
  Button,
  CardImg,
  CardGroup,
  CardBody,
  ListGroup,
  ListGroupItem,
  Badge,
  Col,
} from "reactstrap";

import { BiHappy, BiAngry } from "react-icons/bi";
import { FcLike } from "react-icons/fc";

class Cat extends Component {
  constructor(props) {
    super(props);
  }
  onClickFavourite = (catId) => {
    var myHeaders = new Headers();
    myHeaders.append("x-api-key", "cdbfbcaf-5f5f-4abf-9f4d-fc5974aacf9c");
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({ image_id: catId, sub_id: "cat1.jpg" });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      //redirect: 'follow'
    };

    fetch("https://api.thecatapi.com/v1/favourites", requestOptions)
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  }

  render() {
    return (
      <Col>
        <CardGroup style={{ maxWidth: 340, minWidth: 200 }}>
          <Card>
            <CardImg
              width="100%"
              height="300"
              src={this.props.url}
              alt="Card image cap"
            />
            <CardBody>
              <div style={{ display: "flex" }}>
                <Button color="success" style={{ marginRight: "auto" }} outline>
                  <BiHappy /> Love it!
                </Button>
                <Button color="danger" style={{ marginLeft: "auto" }} outline>
                  <BiAngry />
                  Nope it!
                </Button>
              </div>
              <br></br>
              <div>
                <ListGroup style={{ textAlign: "center" }}>
                  <ListGroupItem className="justify-content-between">
                    Score <Badge color="warning">14</Badge>
                  </ListGroupItem>
                  <ListGroupItem className="justify-content-between">
                    <Button
                      style={{ marginRight: "1rem" }}
                      outline
                      color="primary"
                      onClick={() => this.onClickFavourite(this.props.id)}
                    >
                      <FcLike />
                    </Button>
                    <Button
                      style={{ marginLeft: "1rem" }}
                      outline
                      color="primary"
                    >
                      Share
                    </Button>
                  </ListGroupItem>
                </ListGroup>
              </div>
            </CardBody>
          </Card>
        </CardGroup>
      </Col>
    );
  }
}

export default Cat;