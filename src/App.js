import axios from 'axios'
import './App.css';

function App() {

  const apiUrl = 'http://localhost:5000/'

  axios.get('http://localhost:5000/movies')
  .then(response => {
    console.log(response)
  })
  .catch(error => {
    console.log(error)
  })

  return (
    <div className="App">
      <h1>Hello guys </h1>
      
    </div>
  );
}

export default App;
