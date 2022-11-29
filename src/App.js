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
/*
  Possible ideas for entering info:
  - Basic input section with CV display below (easy)
  - Sidebar opens to input fields with CV behind (difficult)
  - Screen wipe with header to reveal CV or input fields (very difficult)

  Extra:
  - CV style selection using cards
  - PDF export
  
*/