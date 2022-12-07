import { Component } from "react";
import Info from "./Info";
import Edu from "./Edu";
import Display from "./Display";


class MainWrapper extends Component {
    constructor(props){
        super(props);
        this.infoSubmit = this.infoSubmit.bind(this);
        this.eduSubmit = this.eduSubmit.bind(this);
        this.addEdu = this.addEdu.bind(this);
        //TODO: figure out how to structure state 
        //      so that new properties can be added to it dynamically
        // [{info},{education0},{eduaction1},{experience0},{experience1}...]

        this.state = { geninfo: {name: "", address: "", email: "", phone: "", },
                       work: [{title: "temp", company: "", location: "", startyr: "", endyr: "", desc: ""}],
                       education: [{uname: "Temp U", city: "", degree: "", field: "", gradyr: ""},],};
    }
    infoSubmit(event) {
        event.preventDefault();
        //This is easy to update because its not in a dynamic array 
        //Editing this after submission might cause data loss bugs
        this.setState({geninfo: {
            name: event.target.namein.value,
            email: event.target.emailin.value,
            phone: event.target.phonein.value,
        }})
    }
    eduSubmit(index,event){
        // You need a key/index value to update proper array item from the event
        let key = index;
        console.log(key);
        event.preventDefault();
        this.setState(prevState => ({
            education: prevState.education.map(
                (el, index) => index === key ? {uname: event.target.unamein.value, city: event.target.ucityin.value, degree: event.target.degreein.value, field: event.target.subjectin.value, gradyr: event.target.uyearin.value } : el
            )
        }))
    }
    addEdu(){
        let newEdu = {uname: "", city: "", degree: "", field: "", gradyr: ""};
        this.setState(prevState => ({
            education: [...prevState.education, newEdu]
        }));
    }
    render(){
        return(
            <div>
                <Info infoSubmit={this.infoSubmit}/>
                <div>
                <Edu data={this.state} eduSubmit={this.eduSubmit} />
                    <button onClick={this.addEdu}>Add More Education</button>
                </div>
                <Display data={this.state}/>
            </div>
        );
    }
}
export default MainWrapper;