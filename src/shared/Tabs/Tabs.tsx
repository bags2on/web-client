import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import MUITabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import { makeStyles } from '@material-ui/core'
import { Link } from 'react-router-dom'

interface TabsPorps {
  orientation?: 'horizontal' | 'vertical'
  value: number
  tabNames: Array<{
    label: string
    path: string
    disabled: boolean
  }>
}

type tabStyles = {
  isVertical: boolean
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: (props: tabStyles) => (props.isVertical ? 0 : 1)
  },
  appBar: {
    color: theme.palette.primary.main,
    boxShadow: 'none',
    borderBottom: (props: tabStyles) => (props.isVertical ? 'none' : '3px solid #343434')
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
    width: (props: tabStyles) => (props.isVertical ? 'auto' : 250),
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

const Tabs: React.FC<TabsPorps> = ({ orientation = 'horizontal', tabNames, value }) => {
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
                  root: classes.tab
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
