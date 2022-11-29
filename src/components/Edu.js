import { Component } from "react";

class Edu extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="App-text">
        <form className="info" onSubmit={this.props.eduSubmit}>
          <label htmlFor="uname">University Name:</label>
          <input type="text" id="uname" name="unamein"></input>
          <br />
          <label htmlFor="ucity">City:</label>
          <input type="text" id="ucity" name="ucityin"></input>
          <br />
          <label htmlFor="degree">Degree Obtained:</label>
          <input type="text" id="degree" name="degreein"></input>
          <br />
          <label htmlFor="subject">Subject:</label>
          <input type="text" id="subject" name="subjectin"></input>
          <br />
          <label htmlFor="degreeyear">Year of Graduation:</label>
          <input type="num" id="degreeyear" name="uyearin"></input>
          <br />
          <button type="submit">Add Info</button>
        </form>
      </div>
    );
  }
}
export default Edu;
