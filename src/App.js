import './App.css';
import Movie from './components/Movie'
import {useState, useEffect} from 'react'
const movieApi = 'https://tv-api.com/en/API/SearchMovie/k_4uxjsucc/inception 2010'
function App() {
  const movies=[1,2,3]
  const [movie,setMovie] = useState ([])

  useEffect(()=>{
    fetch(movieApi)
    .then(res => res.json())
    .then(res => console.log(res))
  },[])

  return (
    <div className="movies">
      <header>
        <input type = "text" placeholder = "Search..."></input>
      </header>
      <div className="movie">
      {movies.map((e,i)=> <Movie key={i}/>)}
      </div>
    </div>
  );
}

export default App;
