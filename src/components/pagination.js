import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Card, CardContent, Link, List, Button, InputBase,ListItem, ListItemText, ListItemAvatar, Typography, Avatar} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    display:'flex',
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  link: {
    margin: theme.spacing(1),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function CenteredGrid() {
    const classes = useStyles();

    return (
    <div className={classes.root}>
        <Grid container spacing={2}>
            <Grid item xs={12} justify="flex-end">
                <Button variant="contained" className={classes.button}>
                Default1221
                </Button>
            </Grid>
        </Grid>
    </div>
  );
}

