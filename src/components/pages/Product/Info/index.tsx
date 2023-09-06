import React, { useState } from 'react'
import { Tabs, TabContent } from '@/shared/Tabs'

interface InfoProps {
  description?: string
}

const Info: React.FC<InfoProps> = () => {
  const [activeTab, setActiveTab] = useState<number>(0)

  const handleTabChange = (tabIndex: number) => {
    setActiveTab(tabIndex)
  }

  return (
    <div>
      <div>
        <Tabs
          activeTab={activeTab}
          onChange={handleTabChange}
          tabs={[
            {
              label: 'Описание'
            },
            {
              label: 'Комментарии'
            },
            {
              label: 'Опт',
              disabled: true
            }
          ]}
        />
        <TabContent tabID={0} value={activeTab}>
          <div>TabContent #1</div>
        </TabContent>
        <TabContent tabID={1} value={activeTab}>
          <div>TabContent #2</div>
        </TabContent>
        <TabContent tabID={2} value={activeTab}>
          <div>TabContent #3</div>
        </TabContent>
      </div>
    </div>
  )
}

export default Info
