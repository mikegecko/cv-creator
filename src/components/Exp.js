import { Component } from "react";

/*✅ ❌
    Form fields:
    - Position
    - Company name
    - Description
    - From
    - To
*/

class Exp extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="App-text App-edu">
        <div className="wrapper">
          <h2> Work Experience </h2>
          <div className="container">
            {this.props.data.work.map((el, index) => {
              return (
                /* Key property must go in top level node */
                <form
                  key={index}
                  className="info"
                  onSubmit={(event) => this.props.workSubmit(index, event)}
                >
                  <div className="form">
                    <input
                      type="text"
                      id="title"
                      name="titlein"
                      placeholder="Job Title"
                    ></input>
                    <input
                      type="text"
                      id="company"
                      name="companyin"
                      placeholder="Company Name"
                    ></input>
                    <input
                      type="text"
                      id="wcity"
                      name="wcityin"
                      placeholder="City"
                    ></input>
                    <input
                      type="text"
                      id="wstartyr"
                      name="wstartyrin"
                      placeholder="From"
                    ></input>
                    <input
                      type="num"
                      id="wendyr"
                      name="wendyrin"
                      placeholder="To"
                    ></input>
                    <button className="submit-btn" type="submit">
                      Add Info
                    </button>
                  </div>
                </form>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
export default Exp;
