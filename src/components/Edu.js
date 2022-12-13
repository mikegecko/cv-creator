import { Component } from "react";

const Edu = (props) => {
  return (
    <div className="App-text App-edu">
      <div className="wrapper">
        <h2>Education</h2>
        <div className="container">
          {props.education.map((el, index) => {
            return (
              /* Key property must go in top level node */
              <form
                key={'e'+index}
                className="info"
                onSubmit={(event) => props.eduSubmit(index, event)}
              >
                <div className="form">
                  <input
                    type="text"
                    id="uname"
                    name="unamein"
                    placeholder="University Name"
                  ></input>
                  <input
                    type="text"
                    id="ucity"
                    name="ucityin"
                    placeholder="City"
                  ></input>
                  <input
                    type="text"
                    id="degree"
                    name="degreein"
                    placeholder="Degree Obtained"
                  ></input>
                  <input
                    type="text"
                    id="subject"
                    name="subjectin"
                    placeholder="Subject"
                  ></input>
                  <input
                    type="num"
                    id="degreeyear"
                    name="uyearin"
                    placeholder="Year of Graduation"
                  ></input>
                  <button className="submit-btn" type="submit">
                    Add Info
                  </button>
                  <button onClick={() => props.removeEduFields(index)}>Remove</button>
                </div>
              </form>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// class Edu extends Component {
//   constructor(props) {
//     super(props);
//   }
//   /*✅ ❌
//     Form fields:
//     ✅ University name
//     ✅ City
//     ✅ Degree
//     ✅ Subject
//     ❌ Start year
//     ✅ Graduation year
// */
//   render() {
//     return (
//       <div className="App-text App-edu">
//         <div className="wrapper">
//           <h2>Education</h2>
//           <div className="container">
//             {this.props.data.education.map((el, index) => {
//               return (
//                 /* Key property must go in top level node */
//                 <form
//                   key={'e'+index}
//                   className="info"
//                   onSubmit={(event) => this.props.eduSubmit(index, event)}
//                 >
//                   <div className="form">
//                     <input
//                       type="text"
//                       id="uname"
//                       name="unamein"
//                       placeholder="University Name"
//                     ></input>
//                     <input
//                       type="text"
//                       id="ucity"
//                       name="ucityin"
//                       placeholder="City"
//                     ></input>
//                     <input
//                       type="text"
//                       id="degree"
//                       name="degreein"
//                       placeholder="Degree Obtained"
//                     ></input>
//                     <input
//                       type="text"
//                       id="subject"
//                       name="subjectin"
//                       placeholder="Subject"
//                     ></input>
//                     <input
//                       type="num"
//                       id="degreeyear"
//                       name="uyearin"
//                       placeholder="Year of Graduation"
//                     ></input>
//                     <button className="submit-btn" type="submit">
//                       Add Info
//                     </button>
//                     <button onClick={() => this.props.removeEduFields(index)}>Remove</button>
//                   </div>
//                 </form>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
export default Edu;
