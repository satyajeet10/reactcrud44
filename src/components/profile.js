import React from 'react';

import Card from './card';
import Pagination from "material-ui-flat-pagination";
 
import { Container } from '@material-ui/core';

export default function Profile(props) {
    console.log(props);
    return(
        <Container maxWidth="sm">
            <div>
                <div style={{textAlign:'left',margin:'10px 10px'}}>Total Results: {props.pageLength}</div>
                {                           
                    props.sendData.map((res,i)=>{
                        return (
                            <Card res={res} key={i}/>
                        )
                    })    
                }
                <Pagination style={{float:'right'}}
                limit={3}
                offset={props.offSetData}
                total={props.pageLength}
                onClick={(e, offset) => {
                    props.changePageData(offset);
                }}
                />
            </div>
        </Container>
    )
}
