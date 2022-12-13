import { Component } from "react";

const Display = (props) => {
    
        return(
            <div className="App-text">
                <div className="cv-page">
                    <div className="cv-sidebar">
                       <h2 className="cv-sidetitle">{props.info.name}</h2>
                        <p className="cv-sideitem">{props.info.currtitle}</p>
                        <h3 className="cv-sideheader">Personal Info</h3>
                        <h4 className="cv-sidetitle">Phone</h4>
                        <p className="cv-sideitem">{props.info.phone}</p>
                        <h4 className="cv-sidetitle">Email</h4>
                        <p className="cv-sideitem">{props.info.email}</p>
                        <h3 className="cv-sideheader">Skills</h3>
                        {props.skills.map((el,index) => {
                            return(
                                <p className="cv-skillitem" key={index}>{el}</p>
                            );
                        })}
                    </div>
                    <div className="cv-area">
                        <p className="cv-hero">&emsp;{props.info.desc}</p>
                        <h3 className="cv-header">Experience</h3>
                        {props.work.map((el,index) => {
                            return(
                                <div className="cv-itemcontainer" key={index}>
                                    <p className="cv-date">{el.startyr} - {el.endyr}</p>
                                    <div>
                                        <h4 className="cv-title">{el.title}</h4>
                                        <p className="cv-info">{el.company}, {el.location}</p>
                                        <ul className="cv-desc">
                                            <li>{el.desc}</li>
                                        </ul>
                                    </div>
                                </div>
                            )
                        })}
                        <h3 className="cv-header">Education</h3>
                        {props.education.map((el,index) => {
                            return(
                                <div className="cv-itemcontainer" key={index}>
                                    <p className="cv-date">{el.gradyr}</p>
                                    <div>
                                        <h4 className="cv-title">{el.field}, {el.degree}</h4>
                                        <p className="cv-info">{el.uname}, {el.city}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        );
}


// class Display extends Component{
//     constructor(props) {
//         super(props);
//     }
//     render(){
//         return(
//             <div className="App-text">
//                 <div className="cv-page">
//                     <div className="cv-sidebar">
//                        <h2 className="cv-sidetitle">{this.props.data.geninfo.name}</h2>
//                         <p className="cv-sideitem">{this.props.data.geninfo.currtitle}</p>
//                         <h3 className="cv-sideheader">Personal Info</h3>
//                         <h4 className="cv-sidetitle">Phone</h4>
//                         <p className="cv-sideitem">{this.props.data.geninfo.phone}</p>
//                         <h4 className="cv-sidetitle">Email</h4>
//                         <p className="cv-sideitem">{this.props.data.geninfo.email}</p>
//                         <h3 className="cv-sideheader">Skills</h3>
//                         {this.props.data.skills.map((el,index) => {
//                             return(
//                                 <p className="cv-skillitem" key={index}>{el}</p>
//                             );
//                         })}
//                     </div>
//                     <div className="cv-area">
//                         <p className="cv-hero">&emsp;{this.props.data.geninfo.desc}</p>
//                         <h3 className="cv-header">Experience</h3>
//                         {this.props.data.work.map((el,index) => {
//                             return(
//                                 <div className="cv-itemcontainer" key={index}>
//                                     <p className="cv-date">{el.startyr} - {el.endyr}</p>
//                                     <div>
//                                         <h4 className="cv-title">{el.title}</h4>
//                                         <p className="cv-info">{el.company}, {el.location}</p>
//                                         <ul className="cv-desc">
//                                             <li>{el.desc}</li>
//                                         </ul>
//                                     </div>
//                                 </div>
//                             )
//                         })}
//                         <h3 className="cv-header">Education</h3>
//                         {this.props.data.education.map((el,index) => {
//                             return(
//                                 <div className="cv-itemcontainer" key={index}>
//                                     <p className="cv-date">{el.gradyr}</p>
//                                     <div>
//                                         <h4 className="cv-title">{el.field}, {el.degree}</h4>
//                                         <p className="cv-info">{el.uname}, {el.city}</p>
//                                     </div>
//                                 </div>
//                             )
//                         })}
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }
export default Display;