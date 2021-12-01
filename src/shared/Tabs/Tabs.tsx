import React from 'react'
import clsx from 'clsx'
import AppBar from '@material-ui/core/AppBar'
import MUITabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import { Link } from 'react-router-dom'
import { makeStyles, Theme } from '@material-ui/core'

interface TabsPorps {
  orientation?: 'horizontal' | 'vertical'
  value: number
  tabNames: Array<{
    label: string
    path: string
    disabled: boolean
  }>
  tabClassName?: string
}

type styleProps = {
  isVertical: boolean
}

const useStyles = makeStyles<Theme, styleProps>((theme) => ({
  root: {
    flexGrow: ({ isVertical }) => (isVertical ? 0 : 1)
  },
  appBar: {
    color: theme.palette.primary.main,
    boxShadow: 'none',
    borderBottom: ({ isVertical }) => (isVertical ? 'none' : '3px solid #343434')
  },
  tabs: {
    background: '#fff',
    textDecoration: 'none'
  },
  indicator: {
    height: 0
  },
  tab: {
    backgroundColor: '#fff',
    width: ({ isVertical }) => (isVertical ? 'auto' : 250),
    textTransform: 'none',
    fontSize: 16,
    fontWeight: 500,
    '&:not($selected):hover': {
      backgroundColor: '#ececec'
    }
  },
  selected: {
    backgroundColor: '#343434',
    color: theme.palette.secondary.main
  }
}))

function a11yProps(index: number) {
  return {
    id: `tab-${index}`,
    'aria-controls': `tabpanel-${index}`
  }
}

const Tabs: React.FC<TabsPorps> = ({ orientation = 'horizontal', tabNames, value, tabClassName }) => {
  const classes = useStyles({ isVertical: orientation === 'vertical' })

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="static">
        <MUITabs
          orientation={orientation}
          value={value}
          classes={{
            indicator: classes.indicator,
            root: classes.tabs
          }}
        >
          {tabNames.map((tab, index) => {
            return (
              <Tab
                key={tab.label}
                label={tab.label}
                disabled={tab.disabled}
                classes={{
                  selected: classes.selected,
                  root: clsx(classes.tab, tabClassName)
                }}
                component={Link}
                to={tab.path}
                {...a11yProps(index)}
              />
            )
          })}
        </MUITabs>
      </AppBar>
    </div>
  )
}

export default Tabs
