import React, { useEffect } from "react";
import "./App.css";

import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Loading from "./components/Loading";
import MessageBox from "./components/MessageBox";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Homepage from "./pages/Homepage";
import SpaceDetails from "./pages/SpaceDetails";
import { useDispatch, useSelector } from "react-redux";
import { selectAppLoading } from "./store/appState/selectors";
import { getUserWithStoredToken } from "./store/user/actions";
import HeroBanner from "./components/HeroBanner";
import MySpace from "./pages/MySpace/MySpace";

const Home = () => (
  <HeroBanner>
    <Homepage />
  </HeroBanner>
);
const Other = () => (
  <HeroBanner>
    <h1>Other</h1>
  </HeroBanner>
);

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectAppLoading);

  useEffect(() => {
    dispatch(getUserWithStoredToken());
  }, [dispatch]);

  return (
    <div className="App">
      <Navigation />
      <MessageBox />
      {isLoading ? <Loading /> : null}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/spaces/:id" element={<SpaceDetails />} />
        <Route path="/other" element={<Other />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/myspace" element={<MySpace />} />
      </Routes>
    </div>
  );
}

export default App;
