import React, { useContext, useState } from "react";
import logo from "./assets/fedex.png";
import logo2 from "./assets/fedex2.png";
import deloitteLogo from "./assets/deloitteLogo.png";
import "./Login.css";
import {
  FormControl,
  Input,
  InputLabel,
  FormHelperText,
  FormLabel,
  TextField,
  Button,
} from "@mui/material";
import { UserContext } from "../Context/UserContext";
import { useNavigate } from "react-router-dom";

function Login() {
  const context = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (email === context.user.email && password === context.user.password) {
      console.log("true");
      navigate("chat");
    } else {
      console.log("false");
      alert("Wrong credentials");
    }
  };

  return (
    <div className="login">
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
                <img src={logo2} alt="" className="fedex-logo-2" />
              </div>
            </div>
            <div className="portal-name">
              <h3 id="head-3">Login via credentials to use ChatBot</h3>
            </div>
            <div className="form-box">
              <div className="form-sub-box">
                <div className="form-box">
                  {/* <FormControl
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                  > */}
                  <form
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      backgroundColor: "white",
                    }}
                    onSubmit={(e) => handleSubmit(e)}
                  >
                    <TextField
                      sx={{ height: "3.5rem" }}
                      color="secondary"
                      type="email"
                      variant="outlined"
                      label="email"
                      fullWidth
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                      sx={{ height: "3.5rem" }}
                      color="secondary"
                      type="password"
                      variant="outlined"
                      label="password"
                      fontSize="2rem"
                      fullWidth
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <a
                      href=""
                      style={{ fontSize: "0.9rem", fontWeight: "300" }}
                    >
                      Forgot Password ?
                    </a>
                    <Button
                      sx={{
                        width: "100%",
                        backgroundColor: "darkblue",
                        color: "white",
                      }}
                      className="submit"
                      variant="outlined"
                      color="secondary"
                      type="submit"
                      size="large"
                    >
                      Login
                    </Button>
                    <a
                      href=""
                      style={{ fontSize: "0.9rem", fontWeight: "300" }}
                    >
                      Login to Audit Portal?
                    </a>
                  </form>
                  {/* </FormControl> */}
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
