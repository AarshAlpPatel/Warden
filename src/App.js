import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="App">

      <nav class="navbar navbar-expand-lg navbar-light" style={{backgroundColor: '#E8F2DC'}}>
        <div class="container-fluid">
          { /* <a class="navbar-brand" href="#">Navbar</a> */ }
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon">
            </span>
          </button>
          <div class="collapse navbar-collapse w-100" id="navbarNavAltMarkup">
            <div class="navbar-nav nav-fill w-50">
              <a class="nav-link active" aria-current="page" href="#" style={{fontWeight: '600', paddingLeft: '10vw'}}>Home</a>
              <a class="nav-link" href="#" style={{fontWeight: '600'}}>Dashboard</a>
              <a class="nav-link" href="#" style={{fontWeight: '600'}}>About Us</a>
              <a class="nav-link" href="#" style={{fontWeight: '600'}}>Contact Us</a>
            </div>
          </div>
        </div>
      </nav>

      <header className="App-header">

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
