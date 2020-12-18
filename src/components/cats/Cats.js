import React from "react";
import {
  Card,
  Button,
  CardImg,
  CardGroup,
  CardBody,
  ListGroup,
  ListGroupItem,
  Badge,
  Container,
  Row,
  Col,
} from "reactstrap";
import cat1 from "../catimages/cat1.jpg";
import { BiHappy, BiAngry } from "react-icons/bi";
import { FcLike } from "react-icons/fc";

const Cats = (props) => {
  return (
    <Container>
      
      <Row xs="1" sm="2" md="4">
        <Col>
          <CardGroup style={{ maxWidth: 340, minWidth: 200 }}>
            <Card>
              <CardImg width="100%" src={cat1} alt="Card image cap" />
              <CardBody>
                <div style={{ display: "flex" }}>
                  <Button
                    color="success"
                    style={{ marginRight: "auto" }}
                    outline
                  >
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
                      <Button style={{ marginRight: "1rem" }}outline color="primary">
                        <FcLike />
                      </Button>
                      <Button style={{ marginLeft: "1rem" }}outline color="primary">
                        Share
                      </Button>
                    </ListGroupItem>
                  </ListGroup>
                </div>
              </CardBody>
            </Card>
          </CardGroup>
        </Col>


        <Col>
          <CardGroup style={{ maxWidth: 340, minWidth: 200 }}>
            <Card>
              <CardImg width="100%" src={cat1} alt="Card image cap" />
              <CardBody>
                <div style={{ display: "flex" }}>
                  <Button
                    color="success"
                    style={{ marginRight: "auto" }}
                    outline
                  >
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
                      <Button style={{ marginRight: "1rem" }}outline color="primary">
                        <FcLike />
                      </Button>
                      <Button style={{ marginLeft: "1rem" }}outline color="primary">
                        Share
                      </Button>
                    </ListGroupItem>
                  </ListGroup>
                </div>
              </CardBody>
            </Card>
          </CardGroup>
        </Col>


        <Col>
          <CardGroup style={{ maxWidth: 340, minWidth: 200 }}>
            <Card>
              <CardImg width="100%" src={cat1} alt="Card image cap" />
              <CardBody>
                <div style={{ display: "flex" }}>
                  <Button
                    color="success"
                    style={{ marginRight: "auto" }}
                    outline
                  >
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
                      <Button style={{ marginRight: "1rem" }}outline color="primary">
                        <FcLike />
                      </Button>
                      <Button style={{ marginLeft: "1rem" }}outline color="primary">
                        Share
                      </Button>
                    </ListGroupItem>
                  </ListGroup>
                </div>
              </CardBody>
            </Card>
          </CardGroup>
        </Col>


        <Col>
          <CardGroup style={{ maxWidth: 340, minWidth: 200 }}>
            <Card>
              <CardImg width="100%" src={cat1} alt="Card image cap" />
              <CardBody>
                <div style={{ display: "flex" }}>
                  <Button
                    color="success"
                    style={{ marginRight: "auto" }}
                    outline
                  >
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
                      <Button style={{ marginRight: "1rem" }}outline color="primary">
                        <FcLike />
                      </Button>
                      <Button style={{ marginLeft: "1rem" }}outline color="primary">
                        Share
                      </Button>
                    </ListGroupItem>
                  </ListGroup>
                </div>
              </CardBody>
            </Card>
          </CardGroup>
        </Col>


        <Col>
          <CardGroup style={{ maxWidth: 340, minWidth: 200 }}>
            <Card>
              <CardImg width="100%" src={cat1} alt="Card image cap" />
              <CardBody>
                <div style={{ display: "flex" }}>
                  <Button
                    color="success"
                    style={{ marginRight: "auto" }}
                    outline
                  >
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
                      <Button style={{ marginRight: "1rem" }}outline color="primary">
                        <FcLike />
                      </Button>
                      <Button style={{ marginLeft: "1rem" }}outline color="primary">
                        Share
                      </Button>
                    </ListGroupItem>
                  </ListGroup>
                </div>
              </CardBody>
            </Card>
          </CardGroup>
        </Col>


        <Col>
          <CardGroup style={{ maxWidth: 340, minWidth: 200 }}>
            <Card>
              <CardImg width="100%" src={cat1} alt="Card image cap" />
              <CardBody>
                <div style={{ display: "flex" }}>
                  <Button
                    color="success"
                    style={{ marginRight: "auto" }}
                    outline
                  >
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
                      <Button style={{ marginRight: "1rem" }}outline color="primary">
                        <FcLike />
                      </Button>
                      <Button style={{ marginLeft: "1rem" }}outline color="primary">
                        Share
                      </Button>
                    </ListGroupItem>
                  </ListGroup>
                </div>
              </CardBody>
            </Card>
          </CardGroup>
        </Col>
        
        
        
        
      </Row>
      
    </Container>
  );
};

export default Cats;
