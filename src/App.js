import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import SaveIcon from '@material-ui/icons/Save'
import DeleteIcon from '@material-ui/icons/Delete'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import TextField from '@material-ui/core/TextField'

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
    <div className="App">
      <header className="App-header">
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
  );
}

export default App;
