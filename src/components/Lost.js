import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import img from "../assets/img.png";

const LostContainer = styled.div`
  text-align: center;
  background-color: black;
  height: 100vh;
  min-width: 400px;
  img {
    background-size: contain;
    background-repeat: no-repeat;
    margin: 0 auto;
    height: 70vh;
  }
  h1 {
    color: white;
    font-size: 3rem;
    font-family: "Nixie One", cursive;
  }
  button {
    background: transparent;
    border: 2px solid pink;
    color: white;
    padding: 5px 15px;
    font-size: 2.25em;
    transition: all 0.15s ease;
    border-radius: 3px;
    margin: 2em;
  }

  button:hover {
    border: 2px solid dark-pink;
    color: white;
    cursor: pointer;
    transform: scale(1.05);
  }
`;
const Lost = () => {
  return (
    <LostContainer>
      <img src={`${img}`} alt="dog eating page" />
      <h1>Ooh No, Dog ate the page !</h1>
      <NavLink to="./">
        <button>Go back</button>
      </NavLink>
    </LostContainer>
  );
};

export default Lost;
