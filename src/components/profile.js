import React from 'react';

import Card from './card';
import Pagination from "material-ui-flat-pagination";
 
import { Container } from '@material-ui/core';

export default function Profile(props) {
    return(
        <Container maxWidth="sm">
            <div>
                <div style={{textAlign:'left',margin:'10px 10px'}}>Total Results: {props.sendData.length}</div>
                {                           
                    props.sendData.map((res,i)=>{
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
                    console.log('click');
                }}
                />
            </div>
        </Container>
    )
}
