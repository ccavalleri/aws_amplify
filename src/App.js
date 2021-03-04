import React, {Component} from 'react';
import List from './Components/List';
import Title from './Components/Title';

const studentList1 = ["Stephen", "John", "Paul"];
const studentList2 = ["Mark", "Jackie", "Susan"];

class App extends Component {
  render () {
    return (
      <div>
        <Title title= {'Students List:'}/>
        <List students= {studentList1}/>
        <List students= {studentList2}/>
      </div>)
  }
}

export default App;
