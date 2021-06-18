import React, { useState, useEffect } from 'react'
import AccountSettings from './AccountSettings/AccountSettings'
import Favorite from './Favorite/Favorite'
import { useParams } from 'react-router-dom'
import { Tabs, TabPanel } from '../../shared/Tabs'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  root: {
    padding: '30px 15px 10px 15px'
  },
  wrapper: {}
}))

interface ParamsType {
  tabName: string
}

const Profile: React.FC = () => {
  const classes = useStyles()
  const { tabName } = useParams<ParamsType>()
  const [currentTab, setCurrentTab] = useState<number>(0)

  useEffect(() => {
    switch (tabName) {
      case 'info':
        setCurrentTab(0)
        break
      case 'favorite':
        setCurrentTab(1)
        break
      default:
        setCurrentTab(0)
    }
  }, [tabName])

  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        <Tabs
          value={currentTab}
          tabNames={[
            {
              label: 'Личные данные',
              path: '/profile/info',
              disabled: false
            },
            {
              label: 'Избранное',
              path: '/profile/favorite',
              disabled: false
            }
          ]}
        />
        <TabPanel value={currentTab} index={0}>
          <AccountSettings />
        </TabPanel>
        <TabPanel value={currentTab} index={1}>
          <Favorite />
        </TabPanel>
      </div>
    </div>
  )
}

export default Profile
