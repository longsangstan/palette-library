import React, { Component } from "react";
import "./App.css";

import Wrapper from "./Wrapper";
import Palette from "./Palette";

import data from "./data";

class App extends Component {
    render() {
        return (
            <div className="App">
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
                        >
                            Github
                        </a>.
                    </span>
                </Wrapper>
                {data.map((item, i) => <Palette key={i} {...item} />)}
                <Wrapper>
                    <span className="contact">
                        <a
                            href="https://clss.hk/?utm_source=palettelibrary"
                            target="_blank"
                        >
                            ⚡Powered by CLSS.hk
                        </a>
                    </span>
                </Wrapper>
            </div>
        );
    }
}

export default App;
