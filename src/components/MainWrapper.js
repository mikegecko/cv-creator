import { Component } from "react";
import Info from "./Info";
import Edu from "./Edu";
import Display from "./Display";
import Exp from "./Exp";

/* 
    TODO:
    - Redo styling of form to something less ugly
    - Idea: use a tab style to hold each form in its own page

    - Make the description for work and education and info
    - make them into arrays of items and display them in an unordered list
*/

class MainWrapper extends Component {
    constructor(props){
        super(props);
        this.infoSubmit = this.infoSubmit.bind(this);
        this.eduSubmit = this.eduSubmit.bind(this);
        this.workSubmit = this.workSubmit.bind(this);
        this.addEdu = this.addEdu.bind(this);
        this.addWork = this.addWork.bind(this);
        this.removeFields = this.removeFields.bind(this);
        this.state = { geninfo: {name: "", address: "", email: "", phone: "", },
                       work: [{title: "Barista Attendant", company: "Starbucks", location: "Albany, NY", startyr: "2010", endyr: "2015", desc: ""}],
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
        console.log('Edu key:' + key);
        event.preventDefault();
        this.setState(prevState => ({
            education: prevState.education.map(
                (el, index) => index === key ? {uname: event.target.unamein.value, city: event.target.ucityin.value, degree: event.target.degreein.value, field: event.target.subjectin.value, gradyr: event.target.uyearin.value } : el
            )
        }));
    }
    workSubmit(index,event){
        event.preventDefault();
        let key = index;
        console.log('Work key:' + key);
        this.setState(prevState => ({
            work: prevState.work.map(
                (el, index) => index === key ? {title: event.target.titlein.value, company: event.target.companyin.value, location: event.target.wcityin.value, startyr: event.target.wstartyrin.value, endyr: event.target.wendyrin.value} : el
            )
        }));
    }
    addEdu(){
        let newEdu = {uname: "", city: "", degree: "", field: "", gradyr: ""};
        this.setState(prevState => ({
            education: [...prevState.education, newEdu]
        }));
    }
    addWork(){
        let newWork = {title: "", company: "", location: "", startyr: "", endyr: "", desc: ""};
        this.setState(prevState => ({
            work: [...prevState.work, newWork]
        }));
    }
    removeFields(index){
        let editState = this.state;
        editState.education.splice(index,1);
        this.setState(editState);
    }
    render(){
        return(
            <div>
                <Info infoSubmit={this.infoSubmit}/>
                <div>
                    <Edu data={this.state} eduSubmit={this.eduSubmit} removeFields={this.removeFields}/>
                    <button onClick={this.addEdu}>Add More Education</button>
                </div>
                <div>
                    <Exp data={this.state} workSubmit={this.workSubmit}/>
                    <button onClick={this.addWork}>Add More Work</button>
                </div>
                <Display data={this.state}/>
            </div>
        );
    }
}
export default MainWrapper;