import {Component} from 'react';
import './styles/App.css';
import Header from './components/Header';
import Info from './components/Info';
import MainWrapper from './components/MainWrapper';

class App extends Component {
  constructor(props){
    super(props);

  }
  render(){
    return(
      <div className='App'>
        <Header />
        <MainWrapper />
      </div>
    );
  }
}

export default App;
