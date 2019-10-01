import React, { Component } from 'react';
import './App.css';
import Customer from './components/Customer'

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
  return (
    <div>
    {
      customer.map(c => {
        return (
          <Customer
          key={c.id}
            id={c.id}
            image={c.image}
            name={c.name}
            birthday={c.birthday}
            job={c.job} />
        )
      })
    }
    </div>
    );
  }
}
export default App;
