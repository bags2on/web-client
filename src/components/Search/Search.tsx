import React from 'react'
import { Formik, Form } from 'formik'
import { TopSearchSchema, TopSearchType } from '../../utils/validationSchema'
import FormControl from '@material-ui/core/FormControl'
import { useTranslation } from 'react-i18next'
import { makeStyles } from '@material-ui/core'
import Field from './Field'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    boxShadow: '0px 1px 9px -1px rgba(0,0,0,0.1)'
  },
  control: {
    width: '100%',
    display: 'flex',
    marginRight: 5,
    [theme.breakpoints.up('md')]: {
      maxWidth: 350,
      marginRight: 10,
      marginLeft: 'auto'
    }
  },
  inp: {
    backgroundColor: theme.palette.primary.dark,
    // backgroundColor: '#272323',
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
    <div className={classes.root}>
      <Formik
        onSubmit={handleSearch}
        // enableReinitialize
        initialValues={initialValues}
        validationSchema={TopSearchSchema}
      >
        {(): React.ReactElement => (
          <Form noValidate>
            <FormControl variant="outlined" className={classes.control}>
              <Field name="searchQuery" placeholder={t('headerSearch')} />
            </FormControl>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default Search
