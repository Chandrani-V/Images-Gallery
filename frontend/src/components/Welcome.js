import React from 'react'
import { Button } from 'react-bootstrap'



const Welcome = () => 
     (
        <div class="jumbotron">
        <h1> Hello, This is Images Gallery</h1>
        <p>An application for retrieving photos using Unsplash API.
        </p>
        <p>Please enter your search term in input field to search for photos </p>
        <p>
        <a class="btn btn-primary btn-lg" href="https://unsplash.com" role="button">Learn more</a>
        </p>
    </div>



);
export default Welcome;