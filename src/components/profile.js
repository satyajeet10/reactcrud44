import React,{ Component } from 'react';

import Card from './card';
import Pagination from "material-ui-flat-pagination";
 
import { Container } from '@material-ui/core';

class Profile extends Component{
    constructor(props){
        super(props);
        
        this.state = {
            data:[]
        }

        props.sendData().then((res)=>{
            alert(1)
            console.log('Calling Profile Component');
            console.log(res);
            this.setState({
                data: res,
                dataLength: res.length
            })
        }).catch((error)=>{
            this.setState({
                data:[],
                dataLength: 0
            })
        })
    }

    // getData = async ()=>{
    //     let res = await axios.get('https://api.github.com/users?since=0')
    //     let responseData = 0
    //     if (res.data.length>0){
    //         this.setState({
    //             data: res.data,
    //             dataLength: res.data.length
    //         })
    //     }else{
    //         this.setState({
    //             data: responseData
    //         })
    //     }
    // }

    // componentDidMount(){
    //     this.getData();
    // }

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
                    <Pagination style={{float:'right'}}
                    limit={3}
                    offset={0}
                    total={10}
                    onClick={(e, offset) => {
                        // this.handleClick(offset)
                        console.log('click');
                    }}
                    />
                </div>
            </Container>
        )
    }
}

export default Profile;