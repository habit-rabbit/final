import React, {Component} from 'react';
import Nav from './partials/Nav.jsx'

class App extends Component {


  render() {
    console.log("Rendering <App/>");

    return (
      <div className="wrapper">
        <Nav />
        Hello World!
      </div>
    );
  }

}
export default App;
