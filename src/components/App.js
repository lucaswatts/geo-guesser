import "./App.css";
import Header from "./Header";
import Card from "./Card";
import Guessing from "./Guessing";
import Counter from "./Counter";
import Button from "./Button";
import Country from "./Country";
import UIElements from "./UIElements";


function App() {
  return (
    <div id="parentContainer">
    <UIElements />
      <Country />
      <Guessing />
      <Counter />
    </div>
  );
}

export default App;
