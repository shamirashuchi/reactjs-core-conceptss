import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Person name="Rubel" nayika="moushumi"></Person>
      <Person name="Bapparaj" nayika="cheka"></Person>
      <Person name="kuber"nayika="Kopila"></Person>
      <h5>New component. yay</h5>
      <p id="totocompany">rock mama react mama</p>
      <Friend movie="shingham"phone='o1777'></Friend>
      <Friend phone="01999"></Friend>
    </div>
  );
}

function Person(props){
  //console.log(props);
  return (
    <div className="person">
      <h1>{props.name}</h1>
      <p>Nayika: {props.nayika}</p>
    </div>
  )
}

function Friend(props){
  //console.log(props);
  return (
    <div className="container">
      <h1>Name:{props.movie}</h1>
      <p>phone:{props.phone}</p>
    </div>
  )
}

export default App;
