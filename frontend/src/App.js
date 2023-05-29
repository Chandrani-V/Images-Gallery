import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Search from './components/Search';
import ImageCard from './components/ImageCard';
import { useState } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
// {} is not needed for header bcs it is exported as default

//const UNSPLASH_KEY = process.env.REACT_APP_UNSPLASH_KEY
const KEY ='sZ8dJDtqgbQxmuzzy1iVdUDjk3Bh4pDGhz0XbnA5MOw'
function App() {// can also be written as const App ]()=>
    const [word, setWord] = useState('');//initial value
    const [images, setImages] = useState([]);
    //console.log(images)
    const handleSearchSubmit = (e) => {
        e.preventDefault()
        //returns promise and ` is used for sring literals in JS
        fetch(`https://api.unsplash.com/photos/random/?query=${word}&client_id=${KEY}`)
            .then((res)=>res.json()) //executed when promise is resolved, this agains return promise 
            .then((data) => {//promise resolved
                setImages([{...data,title:word }, ...images])// 3 dots indicates array spread
            })
            .catch((err) => {
                console.log(err)
            })
        console.log(images)
        setWord('')
    }
    const handleDeleteImage = (id) => {
        setImages(images.filter((image) => image.id !== id));
    };
    return (//returns JSX -div
      // this is for creating h1, div elemenets
        <div>
            <Header title='Images Gallery' />
            <Search word={word} setWord={setWord} handleSubmit={handleSearchSubmit} />
            <Container className='mt-4'>
                <Row xs={1} md={2} lg={3}> 
                    
                        {images.map((image, i) => (
                            <Col key={i} className='pb-3'>
                                <ImageCard image={image} deleteImage={handleDeleteImage} />
                            </Col>
                        ))}
                    
                </Row>
            </Container>      
        </div>
  );
}
// 2 ! is to convert to boolean true or fase
//ex: a=[1,2], b=[...a,3] then b=[1,2,3] //adding at end
                //setimages,setword func updates asynchronously in react
                //that means immediately after using them u may not see updated values

//{!!images.length && <ImageCard image={images[0]} />}
//  {} is as we are wrting js code
            // map helper in js to loop through all elements and return new array as per call back func
            //here it returns image card array

export default App;
