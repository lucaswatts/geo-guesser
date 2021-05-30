import logo from './logo.svg';
import './App.css';
import header from './header';

function App() {
  return (
    <>
    <header />
    <div>
    <button id="clear" class="clear btn">
      <i class="fas fa-trash"></i> Clear Cards
    </button>

    <h1>
      Memory Cards
      <button id="show" class="btn btn-small">
        <i class="fas fa-plus"></i> Add New Card
      </button>
    </h1>

    <div id="cards-container" class="cards">
     
    </div>

    <div class="navigation">
      <button id="prev" class="nav-button">
        <i class="fas fa-arrow-left"></i>
      </button>

      <p id="current"></p>

      <button id="next" class="nav-button">
        <i class="fas fa-arrow-right"></i>
      </button>
    </div>

    <div id="add-container" class="add-container">
      <h1>
        Add New Card
        <button id="hide" class="btn btn-small btn-ghost">
          <i class="fas fa-times"></i>
        </button>
      </h1>

      <div class="form-group">
        <label for="question">Question</label>
        <textarea id="question" placeholder="Enter question..."></textarea>
      </div>

      <div class="form-group">
        <label for="answer">Answer</label>
        <textarea id="answer" placeholder="Enter Answer..."></textarea>
      </div>

      <button id="add-card" class="btn">
        <i class="fas fa-plus"></i> Add Card
      </button>
    </div>
    </div>
    </>
  )
}

export default App;
