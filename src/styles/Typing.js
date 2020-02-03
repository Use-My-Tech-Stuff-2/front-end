import React, { Component } from "react";
import Typed from "typed.js";
import styled from "styled-components";

export default class Typing extends Component {
  componentDidMount() {
    // If you want to pass more options as props, simply add
    // your desired props to this destructuring assignment.
    const { strings } = this.props;
    // You can pass other options here, such as typing speed, back speed, etc.
    const options = {
      strings: strings,
      typeSpeed: 53,
      backDelay: 500,
      startDelay: 1000
    };
    // this.el refers to the <span> in the render() method
    this.typed = new Typed(this.el, options);
  }

  componentWillUnmount() {
    // Make sure to destroy Typed instance on unmounting
    // to prevent memory leaks
    this.typed.destroy();
  }

  render() {
    return (
      <Type className="wrap">
        <div className="type-wrap">
          <span
            style={{ whiteSpace: "pre" }}
            ref={el => {
              this.el = el;
            }}
          />
        </div>
      </Type>
    );
  }
}

const Type = styled.div`
  .typed-cursor {
    opacity: 0;
  }
  span {
    color: #1d9af2;
    text-shadow: 0 0 1px #999;
  }
`;
