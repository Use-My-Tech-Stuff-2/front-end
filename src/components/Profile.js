import React, { useEffect, useState } from "react";
import { ListGroup } from "react-bootstrap";
import axios from "axios";
import { ProfileContainer } from "../styles/styles.js";
import profile from "../assets/profile.svg";
import { useSelector, useDispatch } from "react-redux";
import { Fetch } from "../actions/Apicalls.js";
import ProfileItems from "./ProfileItems.js";
import { NavLink } from "react-router-dom";

const Profile = props => {
  var check = "	\u2713";
  var noCheck = "	\u274C";
  const [user, setUser] = useState([]);
  const items = useSelector(state => state.data);
  const currentuser = useSelector(state => state.currentuser);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then(res => {
        setUser(res.data.results[0]);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  useEffect(() => {
    dispatch(Fetch());
  }, [dispatch]);

  return (
    <ProfileContainer>
      <div class="coverPhoto">
        <img style={{ top: "255px" }} id="cover" src={`${profile}`} alt="" />
      </div>
      <div>
        <img style={{ top: "480px" }} id="icon" src={user.image} alt="" />
      </div>
      <div className="listContainer" style={{ display: "flex" }}>
        <ListGroup
          variant="flush"
          style={{
            padding: "2em 5em",
            fontSize: "2.5rem",
            height: "50vh",
            border: "none"
          }}
        >
          <ListGroup.Item
            style={{ border: "none", fontFamily: "'Nixie One', cursive" }}
          >
            Verified info
          </ListGroup.Item>
          {console.log(props, "props")}
          <ListGroup.Item style={{ border: "none" }}>
            Name: {user.name}{" "}
            <span style={{ paddingLeft: "20px" }}>{check}</span>
          </ListGroup.Item>
          <ListGroup.Item style={{ border: "none" }}>
            Email: {user.gender}{" "}
            <span style={{ paddingLeft: "20px" }}>{check}</span>
          </ListGroup.Item>
          <ListGroup.Item style={{ border: "none" }}>
            Phone number: <span style={{ paddingLeft: "20px" }}>{noCheck}</span>
          </ListGroup.Item>
          <ListGroup.Item style={{ border: "none" }}>
            Facebook: <span style={{ paddingLeft: "20px" }}>{noCheck}</span>
          </ListGroup.Item>
        </ListGroup>
        <ListGroup
          variant="flush"
          style={{
            padding: "2em 5em",
            fontSize: "2.5rem",
            height: "50vh",
            border: "none"
          }}
        >
          <ListGroup.Item
            style={{ border: "none", fontFamily: "'Nixie One', cursive" }}
          >
            Your Items !
          </ListGroup.Item>

          <ListGroup.Item style={{ border: "none" }}>
            <NavLink to="/PersonalItems">
              <h2 style={{ color: "whitesmoke" }}>My Items</h2>
            </NavLink>

            {console.log(items, "items")}
          </ListGroup.Item>
          <ListGroup.Item style={{ border: "none" }}></ListGroup.Item>
          <ListGroup.Item style={{ border: "none" }}></ListGroup.Item>
          <ListGroup.Item style={{ border: "none" }}></ListGroup.Item>
        </ListGroup>
      </div>
    </ProfileContainer>
  );
};

export default Profile;
