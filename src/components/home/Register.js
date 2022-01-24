import React, { Component } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from '@mui/material/Button';

class Register extends Component {
    render() {
        return (
            <div>
              <h1>Register Here</h1>
              <Box sx={{"& .MuiTextField-root": { m: 1, width: "45ch" },}}>
              <form noValidate autoComplete="off">
              <TextField
              type="text"
                label="Firstname"
                id="outlined-size-small"
                placeholder="Enter Your First Name"
                size="small"
              />
              <br/>
              <TextField
              type="text"
                label="Lastname"
                id="outlined-size-small"
                placeholder="Enter Your Last Name"
                size="small"
              />
              <br/>
              <TextField
              type="text"
                label="Email"
                id="outlined-size-small"
                placeholder="Enter Your Email"
                size="small"
              />
              <br/>
               <TextField
               type="password"
                label="Password"
                id="outlined-size-small"
                placeholder="Enter Your Password"
                size="small"
              />
              <br/>
                 <Button variant="contained" style={{width:250}} color="success">
              Register
            </Button>
              </form>
              </Box>
            </div>
          );
    }
}

export default Register;
