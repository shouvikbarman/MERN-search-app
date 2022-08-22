import './styles/app.css'
import SearchBar from './components/SearchBar'
import axios from 'axios'

function App() {
  async function handleClick(e) {
    e.preventDefault()
    const res = await axios.get('http://localhost:8000/create');
    alert(res.data.message)
  }
  return (
    <div className="App">
    <button onClick={handleClick} className="search-button">Populate database</button>
      <SearchBar/>
    </div>
  );
}

export default App;
