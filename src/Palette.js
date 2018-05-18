import React, { Component } from "react";

import Wrapper from "./Wrapper";
import Color from "./Color";

class Palette extends Component {
    static defaultProps = {
        title: "My Palette",
        url: "https://google.com",
        colors: ["#ff7675", "#fab1a0", "#ffeaa7", "#00b894", "#55efc4"]
    };

    render() {
        const { title, url, colors } = this.props;
        return (
            <Wrapper>
                <p>
                    <a
                        href={url}
                        target="_blank"
                        style={{ fontWeight: "bold" }}
                    >
                        {title}
                    </a>
                </p>
                <div style={{ display: "flex" }}>
                    {colors.map((hex, i) => <Color key={i} hex={hex} />)}
                </div>
            </Wrapper>
        );
    }
}

export default Palette;
