import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NewTeacherComponent from '../components/new-teacher-component'
import ListTeachersComponent from '../components/list-teachers-component'

class TeacherDashboard extends Component {
  constructor() { 
    super(); 
    this.state = { 
      listOfTeachers: ["a", "b", "c"] 
    } 
  }
  render () {
    return (
      <div>
          <NewTeacherComponent></NewTeacherComponent>
          <ListTeachersComponent listOfTeachers = {this.state.listOfTeachers}></ListTeachersComponent>
      </div>
    );
  }
}

export default TeacherDashboard;
