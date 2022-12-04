import { Component } from "react";

class Display extends Component{
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <div className="App-text">
                <h2>{this.props.data.geninfo.name}</h2>
                <p>Phone:{this.props.data.geninfo.phone}</p>
                <p>Email:{this.props.data.geninfo.email}</p>
            </div>
        );
    }
}
export default Display;