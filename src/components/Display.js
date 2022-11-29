import { Component } from "react";

class Display extends Component{
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <div className="App-text">
                <h2>{this.props.data.name}</h2>
                <p>Phone:{this.props.data.phone}</p>
                <p>Email:{this.props.data.email}</p>
            </div>
        );
    }
}
export default Display;