import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Search from './components/Search';
import { useState } from 'react'
// {} is not needed for header bcs it is exported as default


function App() {// can also be written as const App ]()=>
    const [word, setWord] = useState('');
    const handleSearchSubmit = (e) => {
        e.preventDefault()
        console.log(word)
    }
    return (//returns JSX -div
      // this is for creating h1, div elemenets
        <div>
            <Header title='Images Gallery' />
            <Search word={word } setWord={setWord} handleSubmit={ handleSearchSubmit } />
    </div>
  );
}

export default App;
