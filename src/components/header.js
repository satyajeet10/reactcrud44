import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import { Grid, AppBar, Toolbar, IconButton, InputBase, FormControl, InputLabel, Select, MenuItem} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
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
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 7),
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
        width: 120,
            '&:focus': {
                width: 200,
            },
        },
    },
}));

export default function Header(props) {
    const classes = useStyles();
    const [values, setValues] = React.useState({
        age: '',
        name: 'hai',
    });

    const inputLabel = React.useRef(null);
    const [labelWidth, setLabelWidth] = React.useState(0);
    React.useEffect(() => {
        setLabelWidth(inputLabel.current.offsetWidth);
    }, []);

    const handleChange = event => {
        setValues(oldValues => ({
        ...oldValues,
        [event.target.name]: event.target.value,
        }));
    };

    // Search Function 
    const getUserData = (e)=>{
        if (e.target.value){
            // Based on search value
            props.searchData(e.target.value)
        } else {
            // Based on default value
            props.searchData()
        }
    }

    return (
        <div className={classes.root}>
            <AppBar position="static" style={{background:'#1876D2'}}>
                <Grid container spacing={0}>
                    <Grid container item xs={1}>
                <IconButton
                    edge="start"
                    className={classes.menuButton}
                    color="inherit"
                    aria-label="open drawer"
                    >
                        <MenuIcon />
                    </IconButton>
                </Grid>
                <Grid container item xs={7} justify="flex-end">
                <Toolbar>
                    <FormControl variant="outlined" className={classes.formControl}>
                        <InputLabel ref={inputLabel} htmlFor="outlined-age-simple">
                        </InputLabel>
                        <Select
                            value={values.age}
                            onChange={handleChange}
                            labelWidth={labelWidth}
                            style={{background: 'white',width: '200px', position: 'relative',left:'0px',height:'35px'}}
                            inputProps={{
                                name: 'age',
                                id: 'outlined-age-simple',
                            }}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>Sort By Name ( A - Z)</MenuItem>
                            <MenuItem value={20}>Sort By Name ( Z - A)</MenuItem>
                            <MenuItem value={30}>Rank Top</MenuItem>
                            <MenuItem value={30}>Rank Bottom</MenuItem>
                        </Select>
                    </FormControl>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                        placeholder="Search…"
                        classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput,
                        }}
                        inputProps={{ 'aria-label': 'search' }}
                        onChange={getUserData}
                        />
                    </div>
                </Toolbar>
                </Grid>
                </Grid>
            </AppBar>
        </div>
    );
}