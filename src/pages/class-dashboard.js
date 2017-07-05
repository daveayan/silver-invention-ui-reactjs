import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NewClassComponent from '../components/new-class-component'
import ListClassesComponent from '../components/list-classes-component'

class ClassDashboard extends Component {
  render() {
    return (
      <div>
          <NewClassComponent />
          <ListClassesComponent />
      </div>
    );
  }
}

export default ClassDashboard;
