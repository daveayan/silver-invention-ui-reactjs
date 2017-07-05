import React, { Component } from 'react';
import {Card, CardActions, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class NewClassComponent extends Component {
  render() {
    return (
        <Card>
          <CardTitle>
            Add New Class
          </CardTitle>
          <CardText>
            <TextField hintText="Name" />
            <br/>
            <TextField hintText="Start Date" />
          </CardText>
          <CardActions>
            <RaisedButton label="Default" />
          </CardActions>
        </Card>
    );
  }
}

export default NewClassComponent;
