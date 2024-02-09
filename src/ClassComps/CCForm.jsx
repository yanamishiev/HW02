import React, { Component } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Thermostat } from '@mui/icons-material';


export default class CCForm extends Component {

    constructor (props){
        super(props);

        this.state = {
            persons:{FirstName: "", LastName: "", Grade: "", checkGrade: "" }
        };
    }

    enter = (event) => {
        if (event.target.name == "FirstName" )
            this.setState({FirstName: "עליך למלא שם פרטי"})
        else if (event.target.name == "LastName")
            this.setState({LastName: "עליך למלא שם משפחה"})
        else if (event.target.name == "Grade")
            this.setState({Grade: "עליך למלא ציון פסיכומטרי"})
        
    };

    out = () =>{
        this.setState({FirstName: "", LastName:"", Grade:""})
    };

    checkG = (event) => {
        this.out();
        if (event.target.value > 555){
            this.setState({checkGrade:"מזל טוב, אתה יכול להתקבל ללימודים"})
        }
        else{
            this.setState({checkGrade: "מצטערים, עלייך לנסות שוב בשנה הבאה"})
        }

    };
  render() {
    return (
      <div>
              <p style={{backgroundColor: "red"}}>{this.state.FirstName}</p>
              <TextField id="filled-basic" label="First Name" variant="filled" name="FirstName" onFocus={this.enter} onBlur={this.out}/> <br /> <br />
              <p style={{backgroundColor: "red"}}>{this.state.LastName}</p>
              <TextField id="filled-basic" label="Last Name" variant="filled" name="LastName" onFocus={this.enter} onBlur={this.out}/> <br /> <br />
              <p style={{backgroundColor: "red"}}>{this.state.Grade}</p>
              <TextField id="filled-basic" label="Grade" variant="filled" name="Grade" onFocus={this.enter} onBlur={this.checkG}/> <br /> <br />
              <p>{this.state.checkGrade}</p>
      </div>
    )
  }
}
