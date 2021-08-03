import React, { useState, useEffect } from 'react'
import TermsOfUse from './TermsOfUse'
import { useParams } from 'react-router-dom'
import { Tabs, TabPanel } from '../../shared/Tabs'

interface ParamsType {
  tabName: 'terms-of-use' | 'terms-of-site-use'
}

const Terms: React.FC = () => {
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
        setCurrentTab(0)
    }
  }, [tabName])

  return (
    <div>
      <Tabs
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
        <TermsOfUse />
      </TabPanel>
      <TabPanel value={currentTab} index={1}>
        <div>terms-of-site-use</div>
      </TabPanel>
    </div>
  )
}

export default Terms
