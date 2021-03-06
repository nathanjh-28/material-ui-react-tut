import React from 'react';
import './App.css';
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import SaveIcon from '@material-ui/icons/Save'
import DeleteIcon from '@material-ui/icons/Delete'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import TextField from '@material-ui/core/TextField'

import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { green, orange } from '@material-ui/core/colors'
import 'fontsource-roboto';

import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'

import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #ff6b6b, #ffab6b)',
    border: 0,
    borderRadius: 15,
    color: 'white',
    padding: '0 30px'
  }
})

const theme = createMuiTheme({
  typography: {
    h2: {
      fontSize: 36,
      marginBottom: 15,
    }
  },
  // palette: {
  //   primary: {
  //     main: green[500],
  //   },
  //   secondary: {
  //     main: orange[500],
  //   }
  // }
})

function ButtonStyled() {
  const classes = useStyles();
  return <Button className={classes.root}>Test Styled Button</Button>
}

function CheckboxExample() {
  const [checked, setChecked] = React.useState(true)
  return (
    <FormControlLabel
      control={< Checkbox
        checked={checked}
        // make the checkbox a save icon when unchecked
        icon={< SaveIcon />}
        // make the checkbox a color icon when checked
        checkedIcon={< SaveIcon color="secondary" />}

        onChange={(e) => setChecked(e.target.checked)}
        color="secondary"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />}
      label="Example Checkbox"
    />




  )
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xs">

        <div className="App">
          <header className="App-header">
            <AppBar color="secondary">
              <Toolbar>
                <IconButton>
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6">
                  <Button>Login</Button>
                </Typography>
              </Toolbar>

            </AppBar>

            <Typography variant="h2">
              Welcome to MUI
          </Typography>
            <Typography variant="subtitle1" component="div">
              Learn how to use Material UI
          </Typography>
            <ButtonStyled />
            {/* <TextField
              variant="outlined"
              color="secondary"
              type="email"
              label="Email"
              placeholder="test@test.com"
            /> */}
            <Grid container spacing={2} justify="center">
              <Grid item xs={12} sm={6}><Paper style={{ height: 75, width: '100%', }}></Paper></Grid>
              <Grid item xl={3}><Paper style={{ height: 75, width: '100%', }}></Paper></Grid>
              <Grid item xl={3}><Paper style={{ height: 75, width: '100%', }}></Paper></Grid>
              <Grid item xl={3}><Paper style={{ height: 75, width: '100%', }}></Paper></Grid>

            </Grid>
            <CheckboxExample />
            <ButtonGroup color="primary">

              <Button
                startIcon={<SaveIcon />}
                // endIcon={<SaveIcon />}
                // onClick={() => alert('hello')}
                // size="large"
                // style={{fontSize: 48}}
                href='#'
                variant="contained"
                color="primary"
              >
                Save
        </Button>
              <Button
                startIcon={<DeleteIcon />}
                size="large"
                color="secondary"
                variant="contained"

              >
                Discard
        </Button>
            </ButtonGroup>



          </header>
        </div>
      </Container>
    </ThemeProvider>
  );
}

export default App;
