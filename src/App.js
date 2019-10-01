import React, { Component } from 'react';
import Customer from './components/Customer'
import './App.css';
import Paper from '@material-ui/core/Table'
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 1080
  }
})

const customer = [{
  'id': 1,
  'image': 'https://placeimg.com/64/64/any',
  'name': 'Kim',
  'birthday': '930216',
  'gender': 'male',
  'job': 'Student'
},
{
  'id': 2,
  'image': 'https://placeimg.com/64/64/any',
  'name': 'Kang',
  'birthday': '830616',
  'gender': 'female',
  'job': 'Front-End Developer'
},
{
  'id': 3,
  'image': 'https://placeimg.com/64/64/any',
  'name': 'Han',
  'birthday': '980616',
  'gender': 'male',
  'job': 'Teacher'
}]

class App extends Component {
  
  render() {
    const { classes } = this.props;
    return (
    <div>
      <Paper className={classes.root}>
      <Table className={classes.table}>
      <TableHead>
        <TableRow>
          <TableCell>Number</TableCell>
          <TableCell>Image</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>BirthDay</TableCell>
          <TableCell>Gender</TableCell>
          <TableCell>Job</TableCell>
        </TableRow>
      </TableHead>{
      customer.map(c => {
        return (
          <Customer
            key={c.id}
            id={c.id}
            image={c.image}
            name={c.name}
            birthday={c.birthday}
            gender={c.gender}
            job={c.job} />
        )
      })
    }
    </Table>
    </Paper>
    </div>
    );
  }
}
export default withStyles(styles)(App);
