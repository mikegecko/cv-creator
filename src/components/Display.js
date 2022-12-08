import { Component } from "react";

class Display extends Component{
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <div className="App-text">
                <div className="cv-page">
                    <div className="cv-sidebar">
                       <h2 className="cv-sidetitle">{this.props.data.geninfo.name}</h2>
                        <p className="cv-sideitem">Job title...</p>
                        <h3 className="cv-sideheader">Personal Info</h3>
                        <h4 className="cv-sidetitle">Phone</h4>
                        <p className="cv-sideitem">{this.props.data.geninfo.phone}</p>
                        <h4 className="cv-sidetitle">Email</h4>
                        <p className="cv-sideitem">{this.props.data.geninfo.email}</p>
                        <h3 className="cv-sideheader">Skills</h3>
                    </div>
                    <div className="cv-area">
                        <p>lorem ipsum</p>
                        <h3 className="cv-header">Experience</h3>
                        {this.props.data.work.map((el,index) => {
                            return(
                                <div className="cv-itemcontainer" key={index}>
                                    <p className="cv-date">2019<br/>- 2022</p>
                                    <div>
                                        <h4 className="cv-title">{el.title}</h4>
                                        <p className="cv-info">{el.company}, {el.location}</p>
                                    </div>
                                </div>
                            )
                        })}
                        <h3 className="cv-header">Education</h3>
                        {this.props.data.education.map((el,index) => {
                            return(
                                <div key={index}>
                                    <h4>{el.field}, {el.degree}</h4>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        );
    }
}
export default Display;