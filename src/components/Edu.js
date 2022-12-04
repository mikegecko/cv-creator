import { Component } from "react";

class Edu extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="App-text">
            {this.props.data.education.map((el,index) => {
                return(
                    /* Key property must go in top level node */
                    <form  key={index} className="info" onSubmit={event => this.props.eduSubmit(index,event)}>
                    <div><label htmlFor="uname">University Name:</label>
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
                    </div>
                    </form>
                )
            })}
      </div>
    );
  }
}
export default Edu;
