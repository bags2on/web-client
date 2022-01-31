import React, { useState, useEffect } from 'react'
import UseTerms from './UseTerms'
import UserTerms from './UserTerms'
import PaymentDelivery from './PaymentDelivery'
import { useParams } from 'react-router-dom'
import { Tabs, TabPanel } from '../../shared/Tabs'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.up('md')]: {
      display: 'flex'
    }
  },
  tabPanel: {
    width: '100%',
    maxWidth: '100%',
    [theme.breakpoints.up('md')]: {
      width: 310,
      maxWidth: 310
    }
  }
}))

interface ParamsType {
  tabName: 'user-terms' | 'terms-of-site-use' | 'payment-and-delivery'
}

const APP_NAME = process.env.REACT_APP_NAME || '---'
const APP_NAME_RU = process.env.REACT_APP_NAME_RU || '---'

const Terms: React.FC = () => {
  const classes = useStyles()
  const { tabName } = useParams<ParamsType>()
  const [currentTab, setCurrentTab] = useState<number>(0)

  useEffect(() => {
    switch (tabName) {
      case 'user-terms':
        setCurrentTab(0)
        break

      case 'payment-and-delivery':
        setCurrentTab(1)
        break
      case 'terms-of-site-use':
        setCurrentTab(2)
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
        tabClassName={classes.tabPanel}
        tabNames={[
          {
            label: 'Пользовательское соглашение',
            path: '/terms/user-terms',
            disabled: false
          },
          {
            label: 'Оплата и доставка',
            path: '/terms/payment-and-delivery',
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
        <UserTerms brandName={APP_NAME} brandNameRu={APP_NAME_RU} />
      </TabPanel>
      <TabPanel value={currentTab} index={1}>
        <PaymentDelivery />
      </TabPanel>
      <TabPanel value={currentTab} index={2}>
        <UseTerms brandName={APP_NAME} brandNameRu={APP_NAME_RU} />
      </TabPanel>
    </div>
  )
}

export default Terms
