import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import Card1 from "../Assets/Images/Card1.png";
import Card2 from "../Assets/Images/Card2.png";
import Card3 from "../Assets/Images/Card3.png";
import Card4 from "../Assets/Images/Card4.png";
import Grid from "@mui/material/Grid";

function Cards() {
  return (
    <div className="cards">
      <div className="card-header">Try our other free products</div>
      <Grid
        container
        className="card-style"
        justifyContent="center"
        spacing={2}
      >
        <Grid item xs={12} md={4}>
          <Card className="card-width">
            <CardActionArea>
              <CardMedia
                component="img"
                height="200"
                image={Card1}
                alt="Card"
              />
              <CardContent>
                <div className="card-content-heading">
                  Privacy Policy Generator
                </div>
                <div className="card-content-subheading">
                  Stock your store with 100s of products and start selling to
                  customers in minutes, without the hassle of inventory or
                  packaging.
                </div>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card className="card-width">
            <CardActionArea>
              <CardMedia
                component="img"
                height="200"
                image={Card2}
                alt="Card"
              />
              <CardContent>
                <div className="card-content-heading">
                  Terms & Conditions Generator
                </div>
                <div className="card-content-subheading">
                  Stock your store with 100s of products and start selling to
                  customers in minutes, without the hassle of inventory or
                  packaging.
                </div>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card className="card-width">
            <CardActionArea>
              <CardMedia
                component="img"
                height="200"
                image={Card3}
                alt="Card"
              />
              <CardContent>
                <div className="card-content-heading">
                  Domain Name Generator
                </div>
                <div className="card-content-subheading">
                  Stock your store with 100s of products and start selling to
                  customers in minutes, without the hassle of inventory or
                  packaging.
                </div>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card sx={{ marginTop: "5vh" }} className="card-width">
            <CardActionArea>
              <CardMedia
                component="img"
                height="200"
                image={Card4}
                alt="Card"
              />
              <CardContent>
                <div className="card-content-heading">Invoice Generator</div>
                <div className="card-content-subheading">
                  Stock your store with 100s of products and start selling to
                  customers in minutes, without the hassle of inventory or
                  packaging.
                </div>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}></Grid>
        <Grid item xs={12} md={4}></Grid>
      </Grid>
    </div>
  );
}

export default Cards;
