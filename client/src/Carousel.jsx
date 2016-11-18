import React, {Component} from 'react';

class Carousel extends Component {


  render() {

    return (
      <div id="myCarousel" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
        </ol>
        <div >
          <div className="item active" role="listbox">
            <h1>main slide is here (and react Component) </h1>
          </div>

          <div className="item">
            <h1>2nd slide is here </h1>
          </div>

          <div className="item">
            <h1>third slide is here </h1>
          </div>
        </div>
        <a className="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
          <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="right carousel-control" href="#myCarousel" role="button" data-slide="next">
          <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    );
  }

}
export default Carousel;
