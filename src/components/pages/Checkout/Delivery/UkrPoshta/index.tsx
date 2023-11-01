import React from 'react'

interface UkrPoshtaProps {
  current: string
}

const UkrPoshta: React.FC<UkrPoshtaProps> = ({ current }) => {
  if ('ukr-poshta' !== current) {
    return null
  }

  return <div>UkrPoshta</div>
}

export default UkrPoshta
