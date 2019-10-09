import React, { Component } from 'react';

import {BrowserRouter} from 'react-router-dom';

// Components
import Header from './components/header';
import Profile from './components/profile';

import axios from 'axios';

class App extends Component{
    getData = async (val)=>{    
        let data;
        let responseData = 0
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

    render(){
        return (
            <BrowserRouter>
                <Header sendData={this.getData}/>
                <Profile sendData={this.getData}></Profile>
            </BrowserRouter>
        )
    }
}

export default App;