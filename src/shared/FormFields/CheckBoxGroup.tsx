import React, { useState } from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Collapse from '@material-ui/core/Collapse'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import ExpandLessIcon from '@material-ui/icons/ExpandLess'
import { FieldArray } from 'formik'
import { makeStyles } from '@material-ui/core'

import Checkbox from '../Checkbox/Checkbox'

type option = {
  value: string
  label: string
}

interface CheckBoxGroupProps {
  name: string
  title: string
  options: option[]
}

const useStyles = makeStyles(() => ({
  root: {},
  title: {
    padding: '8px 10px'
  },
  collapseList: {
    paddingLeft: 20
  }
}))

const CheckBoxGroup: React.FC<CheckBoxGroupProps> = ({ title, name, options }) => {
  const classes = useStyles()

  const [isCollapsed, setCollapsed] = useState<boolean>(true)

  const handleCollapse = (): void => {
    setCollapsed(!isCollapsed)
  }

  return (
    <FieldArray
      name={name}
      render={(arrayHelpers) => (
        <div>
          <ListItem button onClick={handleCollapse} className={classes.title}>
            <ListItemText primary={title} />
            {isCollapsed ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </ListItem>
          <Collapse in={isCollapsed} timeout="auto" unmountOnExit className={classes.collapseList}>
            {options.map(({ value, label }) => (
              <Checkbox key={value} label={label} value={value} />
            ))}
          </Collapse>
        </div>
      )}
    />
  )
}

export default CheckBoxGroup
