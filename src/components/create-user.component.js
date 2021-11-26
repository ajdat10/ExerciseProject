import React, { Component } from "react";
import axios from "axios"

export default class CreateUsers extends Component {
  constructor(props) {
    super(props);

    this.userInput = React.createRef();
    this.focusTextInput = this.focusTextInput.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: "",
    };
  }

  focusTextInput() {
    this.userInput.current.focus();
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      username: this.state.username,
    }
      

    console.log(user);

    axios.post('http://localhost:1010/users/add', user)
    .then(res => console.log(res.data))
    
    this.setState
      ({
        username: ''
      })
  }
  render() {
    return (
      <div>
        <h3>Create New USer</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group" style={{marginTop: "10px"}}>
            <label>Username: </label>
            <input type='text'
              required
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUsername}/>
          </div>
          <div className="form-group" style={{ marginTop: "10px" }}>
            <input type='submit' value='Create USer' className="btn btn-primary" />
          </div>
        </form>
      </div>
    );
  }
}
