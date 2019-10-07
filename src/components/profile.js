import React,{ Component } from 'react';

import Card from './card';
 
import { Container } from '@material-ui/core';
import axios from 'axios';

class Profile extends Component{
    constructor(props){
        super(props);
        this.state = {
            data:[]
        }
    }

    getData = async ()=>{
        let res = await axios.get('https://api.github.com/users?since=135')
        console.log(res);
        let responseData = 0
        if (res.data.length>0){
            this.setState({
                data: res.data,
                dataLength: res.data.length
            })
        }else{
            this.setState({
                data: responseData
            })
        }
        
    }

    componentDidMount(){
        this.getData();
    }

    render(){
        return(
            <Container maxWidth="sm">
                <div>
                    <div style={{textAlign:'left',margin:'10px 10px'}}>Total Results: {this.state.data.length}</div>
                    {                           
                        this.state.data.map((res,i)=>{
                            return (
                                <Card res={res} key={i}/>
                            )
                        })
                    }
                </div>
            </Container>
        )
    }
}

export default Profile;