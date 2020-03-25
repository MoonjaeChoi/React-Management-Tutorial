import React, { Component } from 'react';
import Customer from './components/Customer';
import './App.css';

const customers = [
 {
  'id': 1,
  'image': 'https://placeimg.com/64/64/1',
  'name': '손흥민',
  'birthday': '9615323',
  'gender': '남자',
  'job': '프로그래머'
}
,{
  'id': 2,
  'image': 'https://placeimg.com/64/64/2',
  'name': '유재석',
  'birthday': '9715323',
  'gender': '남자',
  'job': '디자이너'
}
,{
  'id': 3,
  'image': 'https://placeimg.com/64/64/3',
  'name': '김연아',
  'birthday': '9815323',
  'gender': '여자',
  'job': '복학생'
}
]

class App extends Component {
  render() {
    return (
      <div>
        {
          customers.map(c => {
            return (
              <Customer
              key={c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
              job={c.job}
              />
            )
          }
          )
        }
      </div>
    );
  }
}

export default App;
