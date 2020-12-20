/* eslint-disable no-redeclare */
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

import { BiHappy, BiAngry, BiHeart } from "react-icons/bi";
import { FcLike } from "react-icons/fc";

class Cat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: props.score,
    };
  }

  onClickFavourite = (catId, favourite, favouriteId) => {
      alert(favourite + "*" + favouriteId);
    if (favourite === "0") {
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

      fetch("https://api.thecatapi.com/v1/favourites/", requestOptions)
        .then((response) => response.json())
        .then((result) => window.location.reload(false) )
        .catch((error) => console.log("error", error));
    } else {
      var myHeaders = new Headers();
      myHeaders.append("x-api-key", "cdbfbcaf-5f5f-4abf-9f4d-fc5974aacf9c");

      var requestOptions = {
        method: "DELETE",
        headers: myHeaders,
        //redirect: "follow",
      };

      fetch("https://api.thecatapi.com/v1/favourites/" + favouriteId, requestOptions)
        .then((response) => response.json())
        .then((result) => window.location.reload(false)     )
        .catch((error) => console.log("error", error));
    }
  };

  onClickVote = (catId, vote) => {
    var myHeaders = new Headers();
    myHeaders.append("x-api-key", "cdbfbcaf-5f5f-4abf-9f4d-fc5974aacf9c");
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({ image_id: catId, value: vote });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      //redirect: 'follow'
    };

    fetch("https://api.thecatapi.com/v1/votes", requestOptions)
      .then((response) => response.json())
      .then((result) =>
        /*console.log(result)*/ this.setState({
          score: this.state.score + (vote === 1 ? 1 : -1),
        })
      )
      .catch((error) => console.log("error", error));
  };

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
                <Button
                  color="success"
                  style={{ marginRight: "auto" }}
                  outline
                  onClick={() => this.onClickVote(this.props.id, 1)}
                >
                  <BiHappy /> Love it!
                </Button>
                <Button
                  color="danger"
                  style={{ marginLeft: "auto" }}
                  outline
                  onClick={() => this.onClickVote(this.props.id, 0)}
                >
                  <BiAngry />
                  Nope it!
                </Button>
              </div>
              <br></br>
              <div>
                <ListGroup style={{ textAlign: "center" }}>
                  <ListGroupItem className="justify-content-between">
                    Score <Badge color="warning">{this.state.score}</Badge>
                  </ListGroupItem>
                  <ListGroupItem className="justify-content-between">
                    <Button
                      style={{ marginRight: "1rem" }}
                      outline
                      color="danger"
                      onClick={() =>
                        this.onClickFavourite(
                          this.props.id,
                          this.props.favourite,
                          this.props.favouriteId
                        )
                      }
                    >
                      {this.props.favourite === "1" && <FcLike />}
                      {this.props.favourite === "0" && <BiHeart />}
                    </Button>
                    <Button
                      style={{
                        marginLeft: "1rem",
                        display: this.props.sharedisplay,
                      }}
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
