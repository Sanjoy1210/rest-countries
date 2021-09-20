import './App.css';
import Countries from './components/Countries/Countries';

function App() {
  return (
    <div className="App">
      <Countries></Countries>
    </div>
  );
}






/* 
function Countries () {
  const [countries, setCountries] = useState([]);

  useEffect(() => {

    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => setCountries(data));

  }, []);
  return (
    <div>
      <h1>Traveling around the world!!</h1>
      <h4>Countries Available: {countries.length}</h4>
      {
        countries.map(country => <Country name={country.name} capital={country.capital} population={country.population}></Country>)
      }
    </div>
  );
}

function Country (props) {
  return (
    <div>
      <h3>{props.name}</h3>
      <p>Capital: {props.capital}</p>
      <p>Populations: {props.population}</p>
    </div>
  );
} */

export default App;
