import React from "react";
import logo from "../Images/fedex.png";
import logo2 from "../Images/fedex2.png";
import deloitteLogo from "../Images/deloitteLogo.png";
import "./Login.css";
import { FormControl, Input, InputLabel, FormHelperText, FormLabel, TextField, Button } from "@mui/material";

function Login() {
  return (
    <div>
      <div className="flex-area">
        <div className="left-area area">
          <img src={logo} alt="" className="logo" />
        </div>
        <div className="right-area area">
          <div className="form-area">
            <div className="heading">
              <div className="heading-sub-box">
                <img src={deloitteLogo} alt="" className="deloitte-logo" />
                <br /> 
                <img src={logo2} alt="" className="fedex-logo-2"/>
              </div>
            </div>
            <div className="portal-name">
              <h3>Personal Portal</h3>
            </div>
            <div className="form-box">
              <div className="form-sub-box">
                <div className="form">
                    <FormControl sx={{display:'flex',flexDirection:'column',justifyContent:'space-between'}}>
                        <TextField sx={{height: "3.5rem"}} color="secondary" type="email" variant='outlined' defaultValue="Outlined" label="email" fullWidth />
                        <TextField sx={{height: "3.5rem"}} color="secondary" type="password" variant='outlined' label="password" fontSize="2rem" fullWidth />
                        <a href="" style={{fontSize: "0.9rem", fontWeight:"300"}}>Forgot Password ?</a>
                        <Button sx={{width: "100%", backgroundColor: "darkblue", color: "white"}} className="submit" variant="outlined" color="secondary" type="submit" size="large">Login</Button>
                        <a href="" style={{fontSize: "0.9rem", fontWeight:"300"}}>Login to Audit Portal?</a>
                    </FormControl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
