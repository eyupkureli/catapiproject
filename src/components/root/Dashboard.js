import React, { Component } from "react";
import Cats from "../cats/Cats";

export default class Dashboard extends Component {
  state = { catList: [] };

  componentDidMount() {
    var myHeaders = new Headers();
    myHeaders.append("x-api-key", "cdbfbcaf-5f5f-4abf-9f4d-fc5974aacf9c");

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch("https://api.thecatapi.com/v1/images?limit=100", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        //this.setState({ catList: data });
        this.getScore(data);
      })
      .catch((error) => console.log("error", error));
  }
  getScore = (newCatList) => {
    var myHeaders = new Headers();
    myHeaders.append("x-api-key", "cdbfbcaf-5f5f-4abf-9f4d-fc5974aacf9c");

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };
    fetch("https://api.thecatapi.com/v1/votes?limit=100", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        newCatList.forEach((element) => {
          let score = 0;
          data.forEach((vote) => {
            if (element.id === vote.image_id) {
              score += vote.value === 1 ? 1 : -1;              
            }
            element.score = score;
          });
        });
        this.setState({catList: newCatList})
        //console.log(this.state.catList)
      })
      .catch((error) => console.log("error", error));
  };

  render() {
    return (
      <div>
        <Cats catList={this.state.catList}></Cats>
      </div>
    );
  }
}
