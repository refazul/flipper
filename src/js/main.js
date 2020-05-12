import React from "react";
import ReactDOM from "react-dom";

import {Flipper} from './flipper';

const App = (props) => {
    return (
        <Flipper items={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]} />
    );
}
ReactDOM.render(<App />, document.querySelector("#main"))