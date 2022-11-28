import {Component} from 'react';
import './styles/App.css';
import Header from './components/Header';
import Info from './components/Info';

class App extends Component {
  constructor(props){
    super(props);

  }
  render(){
    return(
      <div className='App'>
        <Header />
        <Info />
      </div>
    );
  }
}

export default App;
