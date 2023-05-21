import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Search from './components/Search';
import { useState } from 'react'
// {} is not needed for header bcs it is exported as default

//const UNSPLASH_KEY = process.env.REACT_APP_UNSPLASH_KEY
const KEY ='sZ8dJDtqgbQxmuzzy1iVdUDjk3Bh4pDGhz0XbnA5MOw'
function App() {// can also be written as const App ]()=>
    const [word, setWord] = useState('');
    const handleSearchSubmit = (e) => {
        e.preventDefault()
        //returns promise and ` is used for sring literals in JS
        fetch(`https://api.unsplash.com/photos/random/?query=${word}&client_id=${KEY}`)
            .then((res)=>res.json()) //executed when promise is resolved, this agains return promise 
            .then((data) => {//promise resolved
                console.log(data)
            })
            .catch((err) => {
                console.log(err)
            })
        setWord('')

    }
    console.log(process.env)
    return (//returns JSX -div
      // this is for creating h1, div elemenets
        <div>
            <Header title='Images Gallery' />
            <Search word={word } setWord={setWord} handleSubmit={ handleSearchSubmit } />
    </div>
  );
}

export default App;
