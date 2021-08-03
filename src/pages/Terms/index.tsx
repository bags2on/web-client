import React, { useState, useEffect } from 'react'
import UseTerms from './UseTerms'
import { useParams } from 'react-router-dom'
import { Tabs, TabPanel } from '../../shared/Tabs'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex'
  }
}))

interface ParamsType {
  tabName: 'terms-of-use' | 'terms-of-site-use'
}

const Terms: React.FC = () => {
  const classes = useStyles()
  const { tabName } = useParams<ParamsType>()
  const [currentTab, setCurrentTab] = useState<number>(0)

  useEffect(() => {
    switch (tabName) {
      case 'terms-of-use':
        setCurrentTab(0)
        break
      case 'terms-of-site-use':
        setCurrentTab(1)
        break
      default:
        setCurrentTab(1)
    }
  }, [tabName])

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        value={currentTab}
        tabNames={[
          {
            label: 'Пользовательское соглашение',
            path: '/terms/terms-of-use',
            disabled: false
          },
          {
            label: 'Условия использования сайта',
            path: '/terms/terms-of-site-use',
            disabled: false
          }
        ]}
      />
      <TabPanel value={currentTab} index={0}>
        <h1>Пользовательское соглашение</h1>
      </TabPanel>
      <TabPanel value={currentTab} index={1}>
        <UseTerms />
      </TabPanel>
    </div>
  )
}

export default Terms
