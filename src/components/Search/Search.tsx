import React from 'react'
import { Formik, Form } from 'formik'
import { TopSearchSchema, TopSearchType } from '../../utils/validationSchema'
import FormControl from '@material-ui/core/FormControl'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import InputAdornment from '@material-ui/core/InputAdornment'
import IconButton from '@material-ui/core/IconButton'
import SearchIcon from '@material-ui/icons/Search'
import CloseIcon from '@material-ui/icons/Close'
import { useTranslation } from 'react-i18next'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(() => ({
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
  const { t } = useTranslation()

  const handleSearch = (values: TopSearchType): void => {
    console.log(values)
  }

  const initialValues: TopSearchType = { searchQuery: '' }

  return (
    <Formik onSubmit={handleSearch} initialValues={initialValues} validationSchema={TopSearchSchema}>
      {({ values }): React.ReactElement => (
        <Form noValidate>
          <FormControl variant="outlined" className={classes.control}>
            <OutlinedInput
              name="searchQuery"
              className={classes.inp}
              // type="text"
              placeholder={t('headerSearch')}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    type="submit"
                    aria-label="search"
                    //   onClick={handleClickShowPassword}
                    edge="end"
                  >
                    {console.log(values)}
                    {!values.searchQuery ? <SearchIcon color="primary" /> : <CloseIcon color="primary" />}
                  </IconButton>
                </InputAdornment>
              }
              labelWidth={0}
            />
          </FormControl>
        </Form>
      )}
    </Formik>
  )
}

export default Search
