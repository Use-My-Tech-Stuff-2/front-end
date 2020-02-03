import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import LoginModal from "./components/LoginModal";
import SignUpModal from "./components/SignUpModal";
import Lost from "./components/Lost";
import MainPage from "./components/MainPage";
import EquipmentUploadForm from "./components/EquipmentUploadForm";
import Profile from "./components/Profile";

export default function App() {
  return (
    <main>
      <Navbar />
      <Switch>
        {/* <Route path="/EquipmentUpload">
          <EquipmentUploadForm />
        </Route> */}
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route path="/login">
          <LoginModal />
        </Route>
        <Route path="/signup">
          <SignUpModal />
        </Route>
        {/* <Route path=''> */}
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="">
          <Lost />
        </Route>
      </Switch>
    </main>
  );
}
