import React from 'react'
import FormControl from '@material-ui/core/FormControl'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import InputAdornment from '@material-ui/core/InputAdornment'
import IconButton from '@material-ui/core/IconButton'
import SearchIcon from '@material-ui/icons/Search'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {},
  control: {
    width: '100%',
    maxWidth: 350
  },
  inp: {
    backgroundColor: '#272323',
    color: '#fff',
    '& .MuiOutlinedInput-input': {
      fontWeight: '600',
      padding: '14px 0 14px 10px'
    }
  },
  notchedOutline: {}
}))

const Search: React.FC = () => {
  const classes = useStyles()

  return (
    <FormControl variant="outlined" className={classes.control}>
      <OutlinedInput
        className={classes.inp}
        type="text"
        placeholder="search"
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="search"
              //   onClick={handleClickShowPassword}
              edge="end"
            >
              <SearchIcon color="primary" />
            </IconButton>
          </InputAdornment>
        }
        labelWidth={0}
      />
    </FormControl>
  )
}

export default Search
