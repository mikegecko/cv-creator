import { Component } from "react";

class Info extends Component {
  constructor(props) {
    super(props);
    this.infoSubmit = this.infoSubmit.bind(this);
  }
  /*
        Create a form with the follwoing input fields
        -   Name
        -   email
        -   phone #
        - Edit / delete button
    */
  infoSubmit(event) {
    event.preventDefault();
    console.log("Click");
  }
  render() {
    return (
      <div className="App-text">
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name"></input>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email"></input>
          <label htmlFor="phone">Phone Number:</label>
          <input type="tel" id="phone"></input>
          <button type="submit" onClick={this.infoSubmit}>
            Add Info
          </button>
        </form>
      </div>
    );
  }
}
export default Info;
