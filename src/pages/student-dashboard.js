import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NewStudentComponent from '../components/new-student-component'
import ListStudentsComponent from '../components/list-students-component'

class StudentDashboard extends Component {
  render() {
    return (
      <div>
          <NewStudentComponent />
          <ListStudentsComponent />
      </div>
    );
  }
}

export default StudentDashboard;
