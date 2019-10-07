import React from 'react';
import ReactDOM from 'react-dom';

import {BrowserRouter} from 'react-router-dom';

// Components
import Header from './components/header';
import Profile from './components/profile';

const App = () =>{
    return (
        <BrowserRouter>
        <Header/>
        <Profile></Profile>
        </BrowserRouter>
    )
}

ReactDOM.render(<App/>,document.querySelector('#root'));