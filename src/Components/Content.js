import React from "react";
import Paper from "@mui/material/Paper";
import InputAdornment from "@mui/material/InputAdornment";
import ClearIcon from "@mui/icons-material/Clear";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Pagination from "@mui/material/Pagination";
import "../Assets/Styles/Dashboard.css";
import Tooltip from "@mui/material/Tooltip";
import TextField from "@mui/material/TextField";

function Content() {
  return (
    <div>
      <Paper className="Content" elevation={0}>
        <div className="Content-heading">Free slogan maker</div>
        <div className="Content-subheading">
          Simply enter a term that describes your business, and get up to 1,000
          <br />
          relevant slogans for free.
        </div>
        <div className="Input">Word for your slogan</div>

        <Grid container>
          <Grid item xs={12}>
            <TextField
              className="input-form"
              id="outlined-textarea"
              hiddenLabel
              defaultValue="cozy"
              multiline
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton>
                      <ClearIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              className="Content-btn button-text-transform"
              size="large"
            >
              Generate Slogans
            </Button>
          </Grid>
        </Grid>
        <Divider className="content-footer" />

        <div className="footer-inline">
          <div className="content-text">
            We have generated 1,023 slogans for “cozy”
          </div>
          <div style={{ flexGrow: 2 }}>
            <Button
              variant="outlined"
              className="Content-btn2 button-text-transform"
            >
              Download all
            </Button>
          </div>
        </div>

        <Grid container className="main-content" spacing={3}>
          <Grid item xs={12} md={6}>
            <Tooltip title="Click to Copy" placement="left">
              <Paper elevation={0} className="content-card">
                There is no Sore it will Not Heal, No cool it will not Subdue.
              </Paper>
            </Tooltip>
          </Grid>
          <Grid item xs={12} md={6}>
            <Tooltip title="Click to Copy" placement="right">
              <Paper elevation={0} className="content-card">
                coziness building for tomorrow
              </Paper>
            </Tooltip>
          </Grid>
          <Grid item xs={12} md={6}>
            <Tooltip title="Click to Copy" placement="left">
              <Paper elevation={0} className="content-card">
                There is no Sore it will Not Heal, No cool it will not Subdue.
              </Paper>
            </Tooltip>
          </Grid>
          <Grid item xs={12} md={6}>
            <Tooltip title="Click to Copy" placement="right">
              <Paper elevation={0} className="content-card">
                Review the facts cool is the best.
              </Paper>
            </Tooltip>
          </Grid>
          <Grid item xs={12} md={6}>
            {" "}
            <Tooltip title="Click to Copy" placement="left">
              <Paper elevation={0} className="content-card">
                Review the facts cool is the best.
              </Paper>
            </Tooltip>
          </Grid>
          <Grid item xs={12} md={6}>
            {" "}
            <Tooltip title="Click to Copy" placement="right">
              <Paper elevation={0} className="content-card">
                coziness building for tomorrow
              </Paper>
            </Tooltip>
          </Grid>
          <Grid item xs={12} md={6}>
            {" "}
            <Tooltip title="Click to Copy" placement="left">
              <Paper elevation={0} className="content-card">
                There is no Sore it will Not Heal, No cool it will not Subdue.
              </Paper>
            </Tooltip>
          </Grid>
          <Grid item xs={12} md={6}>
            {" "}
            <Tooltip title="Click to Copy" placement="right">
              <Paper elevation={0} className="content-card">
                coziness building for tomorrow
              </Paper>
            </Tooltip>
          </Grid>
          <Grid item xs={12} md={6}>
            <Tooltip title="Click to Copy" placement="left">
              <Paper elevation={0} className="content-card">
                There is no Sore it will Not Heal, No cool it will not Subdue.
              </Paper>
            </Tooltip>
          </Grid>
          <Grid item xs={12} md={6}>
            {" "}
            <Tooltip title="Click to Copy" placement="right">
              <Paper elevation={0} className="content-card">
                coziness building for tomorrow
              </Paper>
            </Tooltip>
          </Grid>
          <Grid item xs={12} md={6}>
            {" "}
            <Tooltip title="Click to Copy" placement="left">
              <Paper elevation={0} className="content-card">
                There is no Sore it will Not Heal, No cool it will not Subdue.
              </Paper>
            </Tooltip>
          </Grid>
          <Grid item xs={12} md={6}>
            {" "}
            <Tooltip title="Click to Copy" placement="right">
              <Paper elevation={0} className="content-card">
                coziness building for tomorrow
              </Paper>
            </Tooltip>
          </Grid>
          <Grid item xs={12} md={6}>
            <Tooltip title="Click to Copy" placement="left">
              <Paper elevation={0} className="content-card">
                There is no Sore it will Not Heal, No cool it will not Subdue.
              </Paper>
            </Tooltip>
          </Grid>
          <Grid item xs={12} md={6}>
            {" "}
            <Tooltip title="Click to Copy" placement="right">
              <Paper elevation={0} className="content-card">
                coziness building for tomorrow
              </Paper>
            </Tooltip>
          </Grid>
          <Grid item xs={12} md={6}>
            {" "}
            <Tooltip title="Click to Copy" placement="left">
              <Paper elevation={0} className="content-card">
                There is no Sore it will Not Heal, No cool it will not Subdue.
              </Paper>
            </Tooltip>
          </Grid>
          <Grid item xs={12} md={6}>
            {" "}
            <Tooltip title="Click to Copy" placement="right">
              <Paper elevation={0} className="content-card">
                coziness building for tomorrow
              </Paper>
            </Tooltip>
          </Grid>
          <Grid item xs={12} md={6}>
            {" "}
            <Tooltip title="Click to Copy" placement="left">
              <Paper elevation={0} className="content-card">
                There is no Sore it will Not Heal, No cool it will not Subdue.
              </Paper>
            </Tooltip>
          </Grid>
          <Grid item xs={12} md={6}>
            {" "}
            <Tooltip title="Click to Copy" placement="right">
              <Paper elevation={0} className="content-card">
                coziness building for tomorrow
              </Paper>
            </Tooltip>
          </Grid>
        </Grid>

        <Divider className="content-footer" />

        <Pagination
          count={21}
          color="primary"
          siblingCount={0}
          className="pagination"
        />
      </Paper>
    </div>
  );
}

export default Content;
