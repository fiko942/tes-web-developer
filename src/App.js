import RandomQuotes from "./randomQuotes";
import React, { Component } from "react";
const randomQuotes = new RandomQuotes();

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        console.log(randomQuotes.getRandom(10));
        return <div></div>;
    }
}

export default App;
