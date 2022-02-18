import React from "react";
import Content from "../Components/Content";
import Cards from "../Components/Cards";
import Footer from "../Components/Footer";
import Widget from "../Components/Widget";
import "../Assets/Styles/Dashboard.css";
import { Button } from "@mui/material";
import dukaan from "../Assets/Images/Dukaan.png";

function Dashboard() {
  return (
    <div>
      <div className="Header">
        <div className="header-container">
          <div className="header-inline">
            <div className="footer-subtext">
              <img src={dukaan} alt="dukaan logo" />
            </div>
            <div className="sign-in">
              Sign In
              <Button
                variant="contained"
                className="button-text-transform dashboard-btn"
                size="large"
              >
                Dukaan for PC
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Content />
      <Widget />
      <Cards />
      <Footer />
    </div>
  );
}

export default Dashboard;
