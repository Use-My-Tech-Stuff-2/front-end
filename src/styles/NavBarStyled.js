import styled from "styled-components";

export const NavbarContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  min-width: 500px;
  background: black;
  .logo {
    color: white;
    font-family: "Libre Baskerville";
    font-size: 1.5rem;
  }
  img {
    width: 50px;
    height: 50px;
    background: white;
    margin: 1em;
    border-radius: 3em;
  }
  .nav-bar {
    position: relative;
    padding-top: 3em;
    display: flex;
    flex-direction: row-reverse;
    background: black;
  }
  nav {
    right: 0;
    left: 0;
    width: 319px;
    display: table;
    transform: translateY(-50%);
  }

  nav a {
    position: relative;
    width: 33.333%;
    display: table-cell;

    color: #949494;
    text-decoration: none;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-weight: bold;
    padding: 6px 6px;
    transition: 0.2s ease color;
  }

  nav a:before,
  nav a:after {
    content: "";
    position: absolute;
    border-radius: 50%;
    transform: scale(0);
    transition: 0.2s ease transform;
  }

  nav a:before {
    top: 0;
    left: 10px;
    width: 6px;
    height: 6px;
  }

  nav a:after {
    top: 5px;
    left: 18px;
    width: 4px;
    height: 4px;
  }

  nav a:nth-child(1):before {
    background-color: yellow;
  }

  nav a:nth-child(1):after {
    background-color: red;
  }

  nav a:nth-child(2):before {
    background-color: #00e2ff;
  }

  nav a:nth-child(2):after {
    background-color: #89ff00;
  }

  nav a:nth-child(3):before {
    background-color: purple;
  }

  nav a:nth-child(3):after {
    background-color: palevioletred;
  }

  #indicator {
    position: absolute;
    left: 5%;
    bottom: 0;
    width: 30px;
    height: 3px;
    background-color: #fff;
    border-radius: 5px;
    transition: 0.2s ease left;
  }

  nav a:hover {
    color: #fff;
  }

  nav a:hover:before,
  nav a:hover:after {
    transform: scale(1);
  }

  nav a:nth-child(1):hover ~ #indicator {
    background: linear-gradient(130deg, yellow, red);
  }

  nav a:nth-child(2):hover ~ #indicator {
    left: 34%;
    background: linear-gradient(130deg, #00e2ff, #89ff00);
  }

  nav a:nth-child(3):hover ~ #indicator {
    left: 70%;
    background: linear-gradient(130deg, purple, palevioletred);
  }
`;
