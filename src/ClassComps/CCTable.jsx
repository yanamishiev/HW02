import React, { Component } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';

export default class CCTable extends Component {

    constructor (props){
        super(props);

        this.state = {tableWidth: '100%'};
    }

    click = () => {
        this.setState({tableWidth: '50%'})
    }

    dubleClick = () => {
        this.setState({tableWidth: '100%'})
    }

  render() {

    const {tableWidth} = this.state;

    return (
      <div>
        <TableContainer style={{width: tableWidth}} onClick={this.click} onDoubleClick={this.dubleClick}>
         <Table aria-label="simple table">
        <TableBody>
            <TableRow>
              <TableCell align="center">1</TableCell>
              <TableCell align="center">2</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">3</TableCell>
              <TableCell align="center">4</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">5</TableCell>
              <TableCell align="center">6</TableCell>
            </TableRow>
         
        </TableBody>
      </Table>
    </TableContainer>
      </div>
    )
  }
}
