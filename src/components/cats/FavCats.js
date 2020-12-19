import React, { Component } from "react";
import Cats from "./Cats";

export default class FavCats extends Component {
  state = { catList: [] };

  componentDidMount() {
    var myHeaders = new Headers();
    myHeaders.append("x-api-key", "cdbfbcaf-5f5f-4abf-9f4d-fc5974aacf9c");

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch("https://api.thecatapi.com/v1/favourites?limit=100", requestOptions)
      .then((response) => response.json())
      .then((data) => this.setState({ catList: data }))
      .catch((error) => console.log("error", error));
  }
  render() {
    const cats = this.state.catList.map((item) => {
      let cat = { url: item.image.url, id :  item.image.id, score:0};
      return cat;
    });
    return (
      <div>
        <Cats catList={cats}></Cats>
      </div>
    );
  }
}
