import React, { Component } from "react";
import FilmList from "../components/FilmList.js"

class FilmBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [{title: "Die Hard", showtimes: "19:00, 21:00"}, {title: "Get Out", showtimes: "20:30, 22:45"}]
    };
  }
  render() {
    return <div className="filmBox">
      <h2>UK Opening Times This Week</h2>
      <FilmList data = {this.state.data}/>
      <p>See More Opening Times This Week</p>
      <button className="getShowTimes">Get Showtimes</button>
    </div>
  }
}

export default FilmBox;
