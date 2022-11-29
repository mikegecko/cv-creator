import { Component } from "react";

class Info extends Component {
  constructor(props) {
    super(props);
  }
  /*
        Create a form with the follwoing input fields
        -   Name
        -   email
        -   phone #
        - Current job title
        - Edit / delete button
    */

  render() {
    return (
      <div className="App-text">
        <form className="info" onSubmit={this.props.infoSubmit}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name='namein'></input>
          <br />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name='emailin'></input>
          <br />
          <label htmlFor="phone">Phone Number:</label>
          <input type="tel" id="phone" name='phonein'></input>
          <br />
          <button type="submit">
            Add Info
          </button>
        </form>
      </div>
    );
  }
}
export default Info;
