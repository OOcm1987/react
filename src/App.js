import logo from './logo.svg';
import './App.css';

import TableList from './components/TableList';

function App() {
  let nombre = "Jhon";
  let auth = true;
  let estaciones = ['primavera','otoño','verano','invierno'];
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <label htmlFor='nombre'>Nombre</label>
        <input type="text" id='nombre' />
        <h1>{nombre}</h1>

        <p>
          { auth ? 'logueado':'quien es' }
        </p>

        <p>
          Edit <code>src/App.js</code> and save to reload. recargar
        </p>

        <ul>
          {
            estaciones.map( (el, index) =>(
              <li key={index}>{el}</li>
            ))
          }
        </ul>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React 123
        </a>
        <section>
          <TableList msg="soy un componente 22222ssss" />
        </section>
      </header>
    </div>
  );
}

export default App;
