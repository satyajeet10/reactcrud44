import React from 'react';
import ReactDOM from 'react-dom';

import {BrowserRouter} from 'react-router-dom';

// Components
import Header from './components/header';
import Profile from './components/profile';
import axios from 'axios';

const getData = async (val)=>{    
    let data;
    let responseData = 0
    console.log(typeof val)
    if (val!==undefined){
        let res = await axios.get('https://api.github.com/search/users?q='+val)
        if (res.data.length>0){
            data = res.data;
        }else{
            data = responseData;
        }
    } else {
        let res = await axios.get('https://api.github.com/users?since=0')
        if (res.data.length>0){
            data = res.data;
        }else{
            data = responseData;
        }
    }
    return data;
}

const App = () =>{
    return (
        <BrowserRouter>
            <Header sendData={getData}/>
            <Profile sendData={getData}></Profile>
        </BrowserRouter>
    )
}

ReactDOM.render(<App/>,document.querySelector('#root'));