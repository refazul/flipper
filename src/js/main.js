import React from "react";
import ReactDOM from "react-dom";

import {PageFlip} from './pageflip';

const App = (props) => {
    return (
        <PageFlip />
    );
}
ReactDOM.render(<App />, document.querySelector("#main"))