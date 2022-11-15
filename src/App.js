import RandomQuotes from "./randomQuotes";
import React, { Component } from "react";
import Header from "./Header";
import "./App.css";
const randomQuotes = new RandomQuotes();

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quotes: [],
        };
    }

    componentDidMount() {
        this.setState({ quotes: randomQuotes.getRandom(10) });
    }

    acak() {
        const count = window.prompt(
            "Masukkan jumlah data yang akan kamu tampilkan: "
        );
        if (isNaN(count) || count.trim().length < 1) {
            window.alert("Data yang anda masukkan tidak valid");
        } else {
            this.setState({ quotes: randomQuotes.getRandom(parseInt(count)) });
        }
    }

    render() {
        return (
            <>
                <button onClick={this.acak.bind(this)}>Acak</button>
                <Header />
                <div className="items">
                    {this.state.quotes.map((quote, i) => (
                        <div className="item" key={i}>
                            <div className="title">Peribahasa hari ini:</div>
                            <div className="quote">{quote}</div>
                            <div className="posted">Posted: Thu jan 2004</div>
                        </div>
                    ))}
                </div>
            </>
        );
    }
}

export default App;
