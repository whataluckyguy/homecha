import React from "react";
import "./App.css";
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Typography,
} from "@mui/material";
import { Search } from "@mui/icons-material";

function App() {
  return (
    <div className="app">
      <div className="navbar">
        <Typography variant="h2" color={"white"}>
          Deloitte
        </Typography>
        <Typography variant="h2" color="greenyellow">
          .
        </Typography>
      </div>
      <div className="main">
        <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
          <InputLabel htmlFor="search-with-icon">Type to search</InputLabel>
          <Input
            sx={{
              borderRadius: "30px",
            }}
            id="outlined-adornment-search"
            type="text"
            startAdornment={
              <InputAdornment position="start">
                <IconButton aria-label="search">
                  <Search />
                </IconButton>
              </InputAdornment>
            }
          ></Input>
        </FormControl>
      </div>
    </div>
  );
}

export default App;
