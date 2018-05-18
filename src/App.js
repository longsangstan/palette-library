import React, { Component } from "react";
import "./App.css";

import ReactGA from "react-ga";

import Wrapper from "./Wrapper";
import Palette from "./Palette";

import data from "./data";

ReactGA.initialize("UA-118263436-3");
ReactGA.pageview(window.location.pathname + window.location.search);

class App extends Component {
    renderAbout = () => {
        return (
            <Wrapper>
                <span className="title">Palette Library</span>
                <span className="description">
                    Color palettes of some popular websites.
                </span>
                <span className="description">
                    The source code is available on{" "}
                    <a
                        href="https://github.com/longsangstan/palette-library"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Github
                    </a>.
                </span>
            </Wrapper>
        );
    };

    renderContact = () => {
        return (
            <Wrapper>
                <span className="contact">
                    <a
                        href="https://clss.hk/?utm_source=palettelibrary"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        ⚡Powered by CLSS.hk
                    </a>
                </span>
            </Wrapper>
        );
    };

    render() {
        return (
            <div className="App">
                {this.renderAbout()}
                {data.map((item, i) => <Palette key={i} {...item} />)}
                {this.renderContact()}
            </div>
        );
    }
}

export default App;
