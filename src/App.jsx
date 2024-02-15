import React from "react";
import "./App.css";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import {
  AccountCircle,
  Article,
  DriveEtaRounded,
  Payment,
  Payments,
  Search,
  Settings,
} from "@mui/icons-material";
import { Navigate, useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  return (
    <div className="app">
      <div className="navbar">
        <Box
          sx={{
            display: "flex",
          }}
        >
          <Typography variant="h2" color={"white"}>
            Deloitte
          </Typography>
          <Typography variant="h2" color="greenyellow">
            .
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "60vw",
            backgroundColor: "#6b6c6e",
            border: "1px solid gray",
            borderRadius: "35px",
            paddingLeft: 1,
            paddingRight: 2,
            // color: "white",
          }}
        >
          <IconButton>
            <Search />
          </IconButton>
          <TextField
            id="standard-basic"
            label="Type to search..."
            // focused
            variant="standard"
            fullWidth
            color="error"
            // sx={{ width: "80%" }}
          />
        </Box>

        <Typography variant="h4" color={"white"}>
          Login
        </Typography>
      </div>
      <div className="main">
        <Card
          onClick={() => navigate("chat")}
          variant="outlined"
          sx={{
            width: 300,
            // minHeight: 350,
            border: "2px #ffbf00 solid",
            borderRadius: "20px",
            background: "rgb(230,229,230)",
            background:
              "radial-gradient(circle, rgba(230,229,230,1) 0%, rgba(5,5,6,1) 100%)",
          }}
        >
          <div className="cardmedia">
            <Payments sx={{ fontSize: 150, color: "white" }} />
          </div>
          <CardContent>
            <Typography variant="h5" component={"div"}>
              Cash Applications
            </Typography>
            <Typography variant="body2">
              Cash application is a process of matching incoming payments with
              open invoices in the accounts receivable department.
            </Typography>
          </CardContent>
        </Card>
        <Card
          onClick={() => navigate("chat")}
          variant="outlined"
          sx={{
            width: 300,
            border: "2px #ffbf00 solid",
            borderRadius: "20px",
            background: "rgb(230,229,230)",
            background:
              "radial-gradient(circle, rgba(230,229,230,1) 0%, rgba(5,5,6,1) 100%)",
          }}
        >
          <div className="cardmedia">
            <Article sx={{ fontSize: 150, color: "white" }} />
          </div>
          <CardContent>
            <Typography gutterbottom variant="h5" component={"div"}>
              Misc. Invoicing
            </Typography>
            <Typography variant="body2">
              A miscellaneous invoice is an invoice created by the supplier for
              items other than time sheets or expense sheets.
            </Typography>
          </CardContent>
        </Card>
        <Card
          onClick={() => navigate("chat")}
          variant="outlined"
          sx={{
            width: 300,
            border: "2px #ffbf00 solid",
            borderRadius: "20px",
            background: "rgb(230,229,230)",
            background:
              "radial-gradient(circle, rgba(230,229,230,1) 0%, rgba(5,5,6,1) 100%)",
            // color: "white",
          }}
        >
          <div className="cardmedia">
            <Settings sx={{ fontSize: 150, color: "white" }} />
          </div>
          <CardContent>
            <Typography gutterbottom variant="h5" component={"div"}>
              Invoice Adjustment
            </Typography>
            <Typography variant="body2">
              Invoice adjustments are a normal part of managing your accounts
              receivables.
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default App;
