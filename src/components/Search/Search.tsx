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
    [theme.breakpoints.up('lg')]: {
      flexGrow: 'initial',
      marginLeft: 'auto'
    }
  },
  searchBox: {
    width: '100%',
    position: 'relative',
    tabIndex: 0,
    verticalAlign: 'bottom',
    display: 'flex',
    justifyContent: 'flex-end',
    [theme.breakpoints.up('lg')]: {
      width: 'auto',
      display: 'inline-block',
      '&:focus, &:hover': {
        '& $searchInput': {
          width: 333,
          border: '1px solid #c4c4c4',
          padding: '10px 46px 10px 15px'
        }
      }
    }
  },
  searchInput: {
    fontSize: 14,
    fontWeight: 500,
    position: 'absolute',
    right: 0,
    backgroundColor: '#fff',
    outline: 'none',
    width: '100%',
    left: 'auto',
    height: '100%',
    zIndex: 9,
    transitionDuration: '0.4s',
    borderRadius: 6,
    border: '1px solid',
    padding: '10px 46px 10px 15px',
    '-moz-transition-duration': '0.4s',
    '-webkit-transition-duration': '0.4s',
    '-o-transition-duration': '0.4s',
    [theme.breakpoints.up('lg')]: {
      width: 0,
      padding: 0,
      borderRadius: 10,
      border: 'none',
      borderColor: '#c4c4c4'
    },
    [theme.breakpoints.up('xl')]: {
      width: 333,
      padding: '10px 46px 10px 15px',
      borderRadius: 10,
      border: '1px solid',
      borderColor: '#c4c4c4'
    }
  },
  searchButton: {
    color: '#343434',
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
  const { t } = useTranslation() // from header??

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
          <Form className={classes.searchBox} noValidate>
            <Field
              type="text"
              autoComplete="off"
              name="searchQuery"
              placeholder={t('headerSearch')}
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
