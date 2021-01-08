import React, {Component} from 'react';
import Random from "./Random.js";
import Dice from "./Dice.js";


class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
      <Dice />
      </div>
    )
  }
}

export default App