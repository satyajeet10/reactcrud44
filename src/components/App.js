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
            let showData = result.data.slice(0,3);
            this.setState({
                allData: result.data,
                data: showData,
                dataLength: result.data.length,
                offset: 0
            })
        }).catch((err)=>{
            this.setState({
                allData: [],
                data: [],
                dataLength: 0,
                offset: 0
            })
        })        
    }

    state = {
        allData: [],
        data: [],
        dataLength: 0,
        offset: 0
    }


    getPageNumber = (offCount)=>{
        let showData = this.state.allData.slice(offCount,(offCount+3));
        this.setState({
            data: showData,
            offset: offCount
        })
    }

    getData = (val)=>{
        let data;
        if (val!==undefined){
            axios.get('https://api.github.com/search/users?q='+val)
            .then((result)=>{
                if (result.data.items.length>0){
                    let showData = result.data.items.slice(0,3);
                    this.setState({
                        allData: result.data.items,
                        data: showData,
                        dataLength: result.data.items.length,
                        offset: 0
                    })
                }else{
                    this.setState({
                        allData: [],
                        data: [],
                        dataLength: 0,
                        offset: 0
                    })
                }
            }).catch((err)=>{
                this.setState({
                    allData: [],
                    data: [],
                    dataLength: 0,
                    offset: 0
                })
            })
        } else {
            axios.get('https://api.github.com/users?since=0')
            .then((result)=>{
                debugger;
                if (result.data.length>0){
                    let showData = result.data.slice(0,3); 
                    this.setState({
                        allData: result.data,
                        data: showData,
                        dataLength: result.data.length,
                        offset: 0
                    })
                }else{
                    this.setState({
                        allData: [],
                        data: [],
                        dataLength: 0,
                        offset: 0
                    })
                }
            }).catch((err)=>{
                this.setState({
                    allData: [],
                    data: [],
                    dataLength: 0,
                    offset: 0
                })
            })
        }
        return data;
    }
    
    render(){
        return (
            <BrowserRouter>
                <Header searchData={this.getData}/>
                <Profile 
                sendData={this.state.data}
                offSetData={this.state.offset}
                pageLength={this.state.dataLength} 
                changePageData={this.getPageNumber}
                />
            </BrowserRouter>
        )
    }
}

export default App
