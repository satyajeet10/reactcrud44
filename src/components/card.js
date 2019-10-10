import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, List, Button, ListItem, ListItemText, ListItemAvatar, Typography, Avatar} from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
    button: {
        margin: theme.spacing(1),
    },
    input: {
        display: 'none',
    },
    inline: {
        display: 'inline',
    },
    avatar: {
        margin: 10,
    },
    bigAvatar: {
        margin: 10,
        width: 60,
        height: 60,
    },
    card: {
        minWidth: 275,
    },
    pos:{
        marginBottom: 15,
    },
}));

export default function AlignItemsList(props) {
    const classes = useStyles();
    return (
        <Card className={classes.card} style={{marginBottom:'15px'}}>
            <CardContent style={{padding:'0px', marginBottom:'0px'}}>
                <List className={classes.root}>
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Remy Sharp" src={props.res.avatar_url} className={classes.bigAvatar}/>
                        </ListItemAvatar>
                        <ListItemText
                            primary={
                            <React.Fragment>
                                <Typography
                                    variant="h5"
                                    gutterBottom
                                    >
                                    {props.res.login}
                                </Typography>
                                <Typography variant="body1" gutterBottom>
                                    Profile URL: {props.res.html_url} 
                                </Typography>
                                <div>
                                    <div style={{display:'inline-block',width:'50%'}}>Data One: Value One<br/>Data Two: Value Two</div>
                                    <div style={{display:'inline-block', width:'50%'}}>
                                        <Button variant="outlined" color="primary" className={classes.button} style={{float:'right'}}>Details</Button>
                                    </div>
                                </div>                                
                            </React.Fragment>
                            }
                        />
                    </ListItem>
                </List>
                <Table className={classes.table}>
                    <TableBody>
                        <TableRow>
                            <TableCell align="center">{}</TableCell>
                            <TableCell align="center">{}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    );
}