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
  palette: {
    primary: {
      main: green[500],
    },
    secondary: {
      main: orange[500],
    }
  }
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

      <div className="App">
        <header className="App-header">
          <Typography variant="h2">
            Welcome to MUI
          </Typography>
          <Typography variant="subtitle1" component="div">
            Learn how to use Material UI
          </Typography>
          <ButtonStyled />
          <TextField
            variant="outlined"
            color="secondary"
            type="email"
            label="Email"
            placeholder="test@test.com"
          />
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
    </ThemeProvider>
  );
}

export default App;
