import React, {Component} from 'react';
import { BrowserRouter } from 'react-router-dom';

// Components
import Header from './header';
import Profile from './profile';
import axios from 'axios';

class App extends Component{
    constructor(props){
        super(props)
        axios.get('https://api.github.com/users?since=0')
        .then((result)=>{
            this.setState({
                data: result.data,
                dataLength: result.data.length
            })
        }).catch((err)=>{
            this.setState({
                data: [],
                dataLength: 0
            })
        })        
    }

    state = {
        data: [],
        dataLength: 0
    }


    getData = (val)=>{
        let data;
        if (val!==undefined){
            axios.get('https://api.github.com/search/users?q='+val)
            .then((result)=>{
                if (result.data.items.length>0){
                    this.setState({
                        data: result.data.items,
                        dataLength: result.data.items.length
                    })
                }else{
                    this.setState({
                        data: [],
                        dataLength: 0
                    })
                }
            }).catch((err)=>{
                this.setState({
                    data: [],
                    dataLength: 0
                })
            })
        } else {
            axios.get('https://api.github.com/users?since=0')
            .then((result)=>{
                if (result.data.length>0){
                data = result.data;
                this.setState({
                    data: result.data,
                    dataLength: result.data.length
                })
                }else{
                    this.setState({
                        data: [],
                        dataLength: 0
                    })
                }
            }).catch((err)=>{
                this.setState({
                    data: [],
                    dataLength: 0
                })
            })
        }
        return data;
    }
    
    render(){
        return (
            <BrowserRouter>
                <Header searchData={this.getData}/>
                <Profile sendData={this.state.data}/>
            </BrowserRouter>
        )
    }
}

export default App
