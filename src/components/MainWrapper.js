import { Component } from "react";
import Info from "./Info";

class MainWrapper extends Component {
    constructor(props){
        super(props);
        this.infoSubmit = this.infoSubmit.bind(this);
        this.state = { name: "", email: "", phone: "" };
    }
    infoSubmit(event) {
        event.preventDefault();
        this.setState({
            name: event.target.namein.value,
            email: event.target.emailin.value,
            phone: event.target.phonein.value
        })
    }
    render(){
        return(
            <div>
                <Info infoSubmit={this.infoSubmit}/>
            </div>
        );
    }
}
export default MainWrapper;