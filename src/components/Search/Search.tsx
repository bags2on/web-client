import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import SvgIcon from '@material-ui/core/SvgIcon'
import { makeStyles } from '@material-ui/core'
import { Formik, Form, Field } from 'formik'
import { TopSearchSchema, TopSearchType } from '../../utils/validationSchema'
import { ReactComponent as SearchIcon } from '../../assets/svg/search.svg'
import { useTranslation } from 'react-i18next'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    [theme.breakpoints.up('xl')]: {
      margin: '0 20px'
    }
  },
  searchBox: {
    width: '100%',
    position: 'relative',
    tabIndex: 0,
    verticalAlign: 'bottom',
    display: 'flex',
    justifyContent: 'flex-end'
  },
  searchInput: {
    fontSize: 14,
    fontWeight: 500,
    position: 'absolute',
    right: 0,
    outline: 'none',
    width: '100%',
    left: 'auto',
    height: '100%',
    zIndex: 9,
    transitionDuration: '0.4s',
    borderRadius: 5,
    border: '1px solid',
    color: theme.palette.type === 'light' ? '#3c4144' : '#fff',
    borderColor: theme.palette.type === 'light' ? '#c4c4c4' : '#3c4144',
    backgroundColor: theme.palette.type === 'light' ? '#fff' : '#3c4144',
    padding: '10px 46px 10px 15px',
    '-moz-transition-duration': '0.4s',
    '-webkit-transition-duration': '0.4s',
    '-o-transition-duration': '0.4s',
    [theme.breakpoints.up('lg')]: {
      width: '100%',
      BorderColor: 'transparent'
    },
    '&::placeholder': {
      color: theme.palette.type === 'light' ? '#3c4144' : '#c4c4c4'
    }
  },
  searchButton: {
    color: theme.palette.type === 'light' ? '#3c4144' : '#bbc0c4',
    zIndex: 10,
    '& svg': {
      fontSize: 19
    },
    [theme.breakpoints.up('md')]: {
      '& svg': {
        fontSize: 22
      }
    },
    '&:hover': {
      background: 'none'
    }
  }
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
      <Formik onSubmit={handleSearch} initialValues={initialValues} validationSchema={TopSearchSchema}>
        {(): React.ReactElement => (
          <Form className={classes.searchBox} noValidate>
            <Field
              name="searchQuery"
              autoComplete="off"
              placeholder={t('header.search')}
              className={classes.searchInput}
            />
            <IconButton className={classes.searchButton} color="primary" type="submit">
              <SvgIcon>
                <SearchIcon />
              </SvgIcon>
            </IconButton>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default Search
