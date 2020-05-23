import React from 'react'
import { useField } from 'formik'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import InputAdornment from '@material-ui/core/InputAdornment'
import IconButton from '@material-ui/core/IconButton'
import SearchIcon from '@material-ui/icons/Search'
import CloseIcon from '@material-ui/icons/Close'
import SvgIcon from '@material-ui/core/SvgIcon'
import { makeStyles } from '@material-ui/core'
// import { ReactComponent as SearchIcon } from '../../assets/svg/search.svg'

const useStyles = makeStyles((theme) => ({
  input: {
    backgroundColor: theme.palette.primary.dark,
    // backgroundColor: '#272323',
    color: '#272323',
    '& .MuiOutlinedInput-input': {
      fontWeight: '600',
      padding: '14px 0 14px 10px'
    }
  }
}))

// const Search = () => (
//   <SvgIcon>
//     <SearchIcon />
//   </SvgIcon>
// )

interface FieldProps {
  name: string
  placeholder: string
}

const Field: React.FC<FieldProps> = ({ name }) => {
  const classes = useStyles()

  const [field] = useField({ name })

  return (
    <OutlinedInput
      {...field}
      type="text"
      labelWidth={0}
      className={classes.input}
      endAdornment={
        <InputAdornment position="end">
          <IconButton type="submit" size="medium" aria-label="search" edge="end">
            <SearchIcon color="primary" />
          </IconButton>
        </InputAdornment>
      }
    />
  )
}

export default Field
