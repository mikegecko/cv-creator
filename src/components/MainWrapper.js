import { Component } from "react";
import Info from "./Info";
import Edu from "./Edu";
import Display from "./Display";


class MainWrapper extends Component {
    constructor(props){
        super(props);
        this.infoSubmit = this.infoSubmit.bind(this);
        this.eduSubmit = this.eduSubmit.bind(this);
        //TODO: figure out how to structure state 
        //      so that new properties can be added to it dynamically
        // [{info},{education0},{eduaction1},{experience0},{experience1}...]

        this.state = { geninfo: {name: "", address: "", email: "", phone: "", },
                       work: [{title: "", company: "", location: "", startyr: "", endyr: "", desc: ""}],
                       education: [{uname: "", city: "", degree: "", field: "", gradyr: ""},],};
    }
    infoSubmit(event) {
        event.preventDefault();
        this.setState({
            name: event.target.namein.value,
            email: event.target.emailin.value,
            phone: event.target.phonein.value
        })
    }
    eduSubmit(event){
        event.preventDefault();
        this.setState({

        })
    }
    render(){
        return(
            <div>
                <Info infoSubmit={this.infoSubmit}/>
                <Edu eduSubmit={this.eduSubmit} />
                <Display data={this.state}/>
            </div>
        );
    }
}
export default MainWrapper;