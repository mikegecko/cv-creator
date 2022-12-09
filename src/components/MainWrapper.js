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
        this.addSkill = this.addSkill.bind(this);
        this.removeEduFields = this.removeEduFields.bind(this);
        this.removeWorkFields = this.removeWorkFields.bind(this);
        this.removeSkillField = this.removeSkillField.bind(this);
        this.handleSkillChange = this.handleSkillChange.bind(this);
        this.state = { geninfo: {name: "John Doe", address: "", email: "johndoe@notreal.com", phone: "000-000-000", currtitle: "Junior Web Developer" ,desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempus imperdiet nisl sed vestibulum. Donec gravida, nulla eget blandit fermentum, mauris nisi rutrum libero, ac pharetra erat est sit amet tellus. Quisque fermentum dolor a interdum fermentum. Maecenas vehicula ac ipsum nec gravida. Integer quis porta turpis. Aenean et metus."},
                       work: [{title: "Barista Attendant", company: "Starbucks", location: "Boston, MA", startyr: "2010", endyr: "2015", desc: "Managed and prepared drinks for customers, broke sales goals 3 quarters in a row"}],
                       education: [{uname: "MIT", city: "Boston, MA", degree: "BS", field: "Computer Science", gradyr: "2012"},],
                       skills:["VS Code", "React", "JavaScript", "HTML & CSS"],
                    };
    }
    infoSubmit(event) {
        event.preventDefault();
        //This is easy to update because its not in a dynamic array 
        //Editing this after submission might cause data loss bugs
        this.setState({geninfo: {
            name: event.target.namein.value,
            email: event.target.emailin.value,
            phone: event.target.phonein.value,
            currtitle: event.target.titlein.value,
            desc: event.target.textin.value,
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
                (el, index) => index === key ? {title: event.target.titlein.value, company: event.target.companyin.value, location: event.target.wcityin.value, startyr: event.target.wstartyrin.value, endyr: event.target.wendyrin.value, desc: event.target.descin.value} : el
            )
        }));
    }
    handleSkillChange(index, event){
        let currState = this.state;
        currState.skills[index] = event.target.value;
        this.setState(currState);
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
    addSkill(){
        let newSkill = '';
        this.setState(prevState => ({
            skills: [...prevState.skills, newSkill]
        }));
    }
    removeEduFields(index){
        let editState = this.state;
        editState.education.splice(index,1);
        this.setState(editState);
    }
    removeWorkFields(index){
        let editState = this.state;
        editState.work.splice(index,1);
        this.setState(editState);
    }
    removeSkillField(index){
        let editState = this.state;
        editState.skills.splice(index,1);
        this.setState(editState);
    }
    render(){
        return(
            <div>
                <Info data={this.state} infoSubmit={this.infoSubmit} addSkill={this.addSkill} removeSkillField={this.removeSkillField} handleSkillChange={this.handleSkillChange}/>
                <div>
                    <Edu data={this.state} eduSubmit={this.eduSubmit} removeEduFields={this.removeEduFields}/>
                    <button onClick={this.addEdu}>Add More Education</button>
                </div>
                <div>
                    <Exp data={this.state} workSubmit={this.workSubmit} removeWorkFields={this.removeWorkFields}/>
                    <button onClick={this.addWork}>Add More Work</button>
                </div>
                <Display data={this.state}/>
            </div>
        );
    }
}
export default MainWrapper;