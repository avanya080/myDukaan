import React from "react";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import India from "../Assets/Images/India.png";
import dukaan from "../Assets/Images/Dukaan.png";
import Badge from "@mui/material/Badge";

function Footer() {
  return (
    <div>
      <div className="footer">
        <Grid container justifyContent="center" alignItems="center">
          <Grid item>
            <img alt="dukaan" src={dukaan} />
          </Grid>

          <Grid
            item
            xs
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs>
              <div
                gutterBottom
                variant="subtitle1"
                component="div"
                className="footer-text"
              >
                Contact
              </div>
              <div variant="body2" gutterBottom className="footer-text">
                Faq's
              </div>
            </Grid>
          </Grid>

          <Grid
            item
            xs
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs>
              <div gutterBottom component="div" className="footer-text">
                Tutorials
              </div>
              <div
                variant="body2"
                gutterBottom
                variant="subtitle1"
                className="footer-text"
              >
                Blog
              </div>
            </Grid>
          </Grid>

          <Grid
            item
            xs
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs>
              <div
                gutterBottom
                variant="subtitle1"
                component="div"
                className="footer-text"
              >
                Privacy
              </div>
              <div variant="body2" gutterBottom className="footer-text">
                Banned Items
              </div>
            </Grid>
          </Grid>
          <Grid
            item
            xs
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs>
              <div
                gutterBottom
                variant="subtitle1"
                component="div"
                className="footer-text"
              >
                About
              </div>
              <div variant="body2" gutterBottom className="footer-text">
                <Badge badgeContent={4}>Jobs</Badge>
              </div>
            </Grid>
          </Grid>

          <Grid
            item
            xs
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs>
              <div
                gutterBottom
                variant="subtitle1"
                component="div"
                className="footer-text"
              >
                Facebook
              </div>
              <div variant="body2" gutterBottom className="footer-text">
                Twitter
              </div>
              <div variant="body2" gutterBottom className="footer-text">
                Linkedln
              </div>
            </Grid>
          </Grid>
        </Grid>
        <Divider className="footer-divider" />

        <div className="footer-inline">
          <div className="footer-subtext">
            Dukaan 2020, All rights reserved.
          </div>
          <div className="footer-subtext made-in">
            Made in
            <img src={India} alt="" className="footer-img" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
