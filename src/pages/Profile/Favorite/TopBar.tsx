import React from 'react'
import DeleteIcon from '@material-ui/icons/Delete'
import Button from '../../../shared/Button/Button'
import { FavoriteMutations } from '../../../apollo/cache/mutations'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  root: {
    marginTop: 10,
    display: 'flex',
    justifyContent: 'flex-end'
  },
  clearAllButton: {
    color: '#343434',
    background: 'none',
    fontSize: 17,
    textTransform: 'none',
    padding: '10px',
    '&:hover': {
      background: 'none',
      textDecoration: 'underline'
    }
  }
}))

const TopBar: React.FC = () => {
  const classes = useStyles()

  const handleClearAll = (): void => {
    FavoriteMutations.clearAll()
  }

  return (
    <div className={classes.root}>
      <Button disableShadow onClick={handleClearAll} className={classes.clearAllButton} startIcon={<DeleteIcon />}>
        Удалить все
      </Button>
    </div>
  )
}

export default TopBar
