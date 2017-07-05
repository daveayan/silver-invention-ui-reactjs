import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NewTeacherComponent from '../components/new-teacher-component'
import ListTeachersComponent from '../components/list-teachers-component'

class TeacherDashboard extends Component {
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <NewTeacherComponent></NewTeacherComponent>
        </MuiThemeProvider>
        <MuiThemeProvider>
          <ListTeachersComponent></ListTeachersComponent>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default TeacherDashboard;
