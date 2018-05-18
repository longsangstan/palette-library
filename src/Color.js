import React, { Component } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 95px;
    width: 95px;
    border-radius: 15px;
    margin: 0px 5px;
`;

class Color extends Component {
    static defaultProps = {
        hex: "#000000"
    };

    render() {
        const { hex } = this.props;

        return (
            <Wrapper style={{ backgroundColor: hex }}>
                <p style={{ color: "#ffffff" }}>{hex.toUpperCase()}</p>
            </Wrapper>
        );
    }
}

export default Color;
