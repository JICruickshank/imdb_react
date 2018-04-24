import React, {Component} from "react";
import Film from "./Film.js";

class FilmList extends Component {
  render() {
    const filmNodes = this.props.data.map(film => {
      return (
        <Film title = {film.title} showtimes = {film.showtimes}></Film>
      )
    });
    return <div className="filmList">{filmNodes}</div>
  };
  };

export default FilmList;
