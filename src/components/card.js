import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, List, Button, ListItem, ListItemText, ListItemAvatar, Avatar} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
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
            <CardContent>
                <List className={classes.root}>
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Remy Sharp" src={props.res.avatar_url} className={classes.bigAvatar}/>
                        </ListItemAvatar>
                        <ListItemText
                            secondary={
                            <React.Fragment>
                                <h2>{props.res.login}</h2>
                                <p>Profile URL: {props.res.html_url}</p>
                                <Button variant="outlined" color="primary" className={classes.button} style={{float:'right'}}>Primary</Button>
                            </React.Fragment>
                            }
                        />
                    </ListItem>
                </List>
            </CardContent>
        </Card>
    );
}