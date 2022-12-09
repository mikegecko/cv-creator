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
                <input
                  type="text"
                  id="title"
                  name="titlein"
                  placeholder="Current Occupation"
                ></input>
                <textarea name="textin" placeholder="Description"></textarea>
                <p className="">Skills</p>
                {this.props.data.skills.map((el, index) => {
                  return (
                    <div className="skilldiv" key={index}>
                      <input name="skillin" onChange={(event) => this.props.handleSkillChange(index,event)}></input>
                      <button className="sbutton" onClick={() => this.props.removeSkillField(index)}>
                        <span className="material-icons md-12">remove</span>
                      </button>
                    </div>
                  );
                })}
                <button className="sbutton" onClick={this.props.addSkill}>
                    <span className="material-icons md-12">add</span>
                </button>
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
