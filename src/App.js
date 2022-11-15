import RandomQuotes from "./randomQuotes";
import React, { Component } from "react";
import Header from "./Header";
import "./App.css";
const randomQuotes = new RandomQuotes();

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quotes: randomQuotes.getRandom(10),
        };
    }
    render() {
        return <Header />;
    }
}

export default App;
