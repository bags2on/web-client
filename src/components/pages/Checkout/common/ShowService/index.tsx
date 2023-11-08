import React from 'react'

interface ShowServiceProps {
  as: string
  current: string
  children: React.ReactElement
}

const ShowService: React.FC<ShowServiceProps> = ({ as, current, children }) => {
  if (as !== current) return null
  return children
}

export default ShowService
