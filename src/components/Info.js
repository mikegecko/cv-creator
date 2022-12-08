import { Component } from "react";

class Info extends Component {
  constructor(props) {
    super(props);
  }
  /*
✅ ❌
        Create a form with the follwoing input fields
        ✅ Name
        ✅ email
        ✅ phone #
        ❌ Photo select
        ❌ Address
        ❌ Edit / delete button
    */

  render() {
    return (
      <div className="App-text App-info">
        <div className="wrapper">
          <h2>Personal Info</h2>
          <div className="container">
            <form className="info" onSubmit={this.props.infoSubmit}>
              <div className="form">
                <input
                  type="text"
                  id="name"
                  name="namein"
                  placeholder="Full Name"
                ></input>
                <input
                  type="email"
                  id="email"
                  name="emailin"
                  placeholder="Email"
                ></input>
                <input
                  type="tel"
                  id="phone"
                  name="phonein"
                  placeholder="Phone #"
                ></input>
                <button className="submit-btn" type="submit">
                  Add Info
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default Info;
