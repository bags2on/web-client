import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core'

interface FilterSectionProps {
  title: string
  actions?: any
}

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '10px 0',

    '&:not(:last-child)': {
      borderBottom: `1px solid ${theme.palette.grey[200]}`
    }
  },

  title: {
    color: theme.palette.primary.main
  },

  fieldsBox: {
    marginBottom: 10
  }
}))

const FilterSection: React.FC<FilterSectionProps> = ({ title, actions, children }) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Typography className={classes.title} component="p">
        {title}
      </Typography>

      <div className={classes.fieldsBox}>{children}</div>

      {actions && (
        <Grid container spacing={1} justify="flex-end">
          <Grid item xs="auto">
            {actions}
          </Grid>
        </Grid>
      )}
    </div>
  )
}

export default FilterSection
