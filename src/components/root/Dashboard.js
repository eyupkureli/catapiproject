import React, { Component } from 'react'
import Cats from "../cats/Cats"


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
          .then((data) => this.setState({ catList: data }))
          .catch((error) => console.log("error", error));
      }

      render() {
        return (
            <div>
            <Cats catList ={this.state.catList}></Cats>

            </div>
        )
    }
}
