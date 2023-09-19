import React, { useState } from 'react'
import { Tabs, TabContent } from '@/shared/Tabs'
import Description from './Description'

interface InfoProps {
  gender: string
  description: string
  category: string
  dimensions: string
  color: string
}

const Info: React.FC<InfoProps> = ({ gender, description, dimensions, color, category }) => {
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
          <Description
            gender={gender}
            description={description}
            dimensions={dimensions}
            color={color}
            category={category}
          />
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
