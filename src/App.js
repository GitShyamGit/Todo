import './App.css';
import Todo from './Components/Todo';
import Navbar from './Components/Movie/Navbar';
import Banner from './Components/Movie/Banner';
import MovieList from './Components/Movie/MovieList';


// import {arr} from './Components/Todo';
function App() {
  // console.log(arr)
  return (<div>
    {/* <Todo/> */}
    <Navbar/>
    <Banner/>
    <MovieList/>
    </div>
    
  );
}

export default App;
