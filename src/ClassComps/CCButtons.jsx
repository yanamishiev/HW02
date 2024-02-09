import React, { Component } from 'react'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { deepOrange } from '@mui/material/colors';





export default class CCButtons extends Component {

  constructor (props){
    super(props);

    this.state = {color: 'white', color: 'Black'};
  }

  changeColor = (newColor) => {
    this.setState({backgroundColor: newColor});
  }

  render() {

    const buttonColors = ['red', 'orange', 'yellow', 'green', 'lime', 'lightBlue', 'blue', 'purple']

    return (
      <div style={{backgroundColor: this.state.backgroundColor, padding:'20px', textAlign: 'center'}}>
        <Stack spacing={2} direction="row">
                {buttonColors.map((color, index) => (
                    <Button variant="contained" key={index} onClick={() => this.changeColor(color)} style={{backgroundColor: color, color: 'white'}}>{color}</Button>
                ))}
        </Stack>

      </div>
    )
  }
}
