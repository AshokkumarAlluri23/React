//import logo from './logo.svg';
import './App.css';
// import Hello from './components/Hello';
// import {Great} from './components/Great';
// import Welcome from './components/Welcome'
//import Counter from './components/Counter';
// import Today from './components/Today';
import Greetings from './components/Greetings'
import Access from './components/Access';

function App() {
  return (
    <div className="App">
      {/* <Hello name="Bruce" heroName="Bat Man">
      <p>This is first children</p>
      </Hello>
      <Hello name="Clark" heroName="Super Man"/>
      <Hello name="Diana" heroName="Wonder Women"/> */}
      {/* <Welcome />
      <Hello />
      <Today /> */}
      {/* <Welcome name="Clark"/> */}
      {/* <Counter /> */}
      <Greetings Name="Ashok" Age="32" />
      <Access Name="Alluri Kumar" Age="30" />
    </div>
  );
}

export default App;
