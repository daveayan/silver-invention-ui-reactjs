import React, { Component } from 'react';
import TeacherDashboard from './pages/teacher-dashboard.js'
import StudentDashboard from './pages/student-dashboard.js'
import ClassDashboard from './pages/class-dashboard.js'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Link to="/teacher">Teacher</Link> &nbsp;
          <Link to="/student">Student</Link> &nbsp;
          <Link to="/class">Class</Link> &nbsp;

          <hr />

          <Route exact path="/teacher" component={TeacherDashboard} />
          <Route path="/student" component={StudentDashboard} />
          <Route path="/class" component={ClassDashboard} />
        </div>
      </Router>
    );
  }
}

export default App;
