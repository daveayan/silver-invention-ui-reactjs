import React, { Component } from 'react';
import {Card, CardActions, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class NewTeacherComponent extends Component {
  constructor() { 
    super(); 
    this.state = { 
      teacher: {
        name: "",
        joindate: ""
      }
    } 
  }

  render() {
    return (
        <Card>
          <CardTitle>
            Add New Teacher
          </CardTitle>
          <CardText>
            <TextField hintText="Name" id = "teacher.name" onChange={this.handleChange}/>
            <br/>
            <TextField hintText="Join Date" id="teacher.joindate"/>
          </CardText>
          <CardActions>
            <RaisedButton label="Default" onClick={this.saveTeacher}/>
          </CardActions>
        </Card>
    );
  }

  handleChange(event) {
    // this.setState({value: event.target.value});
    console.log(this.state);
    //this.state[event.target.id] = event.target.value;
    console.log(event.target.id + " = " + event.target.value);
    console.log(this.state);
  }

  saveTeacher() {
      console.log(this.state);
  }
}

export default NewTeacherComponent;
