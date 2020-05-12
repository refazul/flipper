import React from "react";
import ReactDOM from "react-dom";

import {Flipper} from './flipper';

const App = (props) => {
    return (
        <Flipper items={[1, 2, 3, 4, 5, 6, 7, 8, 9]} />
    );
}
ReactDOM.render(<App />, document.querySelector("#main"))