import React from 'react'
import clsx from 'clsx'
import IconButton from '@material-ui/core/IconButton'
import SvgIcon from '@material-ui/core/SvgIcon'
import { Formik, Form, Field } from 'formik'
import { TopSearchSchema, TopSearchType } from '../../utils/validationSchema'
import { ReactComponent as SearchIcon } from '../../assets/svg/search.svg'
import { useTranslation } from 'react-i18next'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: 'auto'
  },
  searchBox: {
    tabIndex: 0,
    position: 'relative',
    display: 'inline-block',
    verticalAlign: 'bottom',
    '&:focus, &:hover': {
      '& $searchInput': {
        border: '1px solid #343434',
        borderRadius: 10,
        width: 333 /* Bar width+1px */,
        padding: '0 16px 0 0'
      },
      '& $expand': {
        padding: '10px 46px 10px 15px'
      }
    }
  },
  searchInput: {
    fontSize: 14,
    fontWeight: 600,
    position: 'absolute',
    right: 0, // ???
    backgroundColor: '#fff',
    outline: 'none',
    border: 'none',
    padding: 0,
    width: 0,
    height: '100%',
    zIndex: 9,
    transitionDuration: '0.4s',
    '-moz-transition-duration': '0.4s',
    '-webkit-transition-duration': '0.4s',
    '-o-transition-duration': '0.4s'
  },
  expand: {
    left: 'auto'
    // right: 49
  },
  searchButton: {
    zIndex: 10
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
          <Form noValidate>
            <div className={classes.searchBox}>
              <Field
                type="text"
                autoComplete="off"
                name="searchQuery"
                placeholder={t('headerSearch')}
                className={clsx(classes.searchInput, classes.expand)}
              />
              <IconButton className={classes.searchButton} color="primary" type="submit">
                <SvgIcon style={{ fontSize: 22 }}>
                  <SearchIcon />
                </SvgIcon>
              </IconButton>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default Search
