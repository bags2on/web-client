import React from 'react'

interface ShowServiceProps {
  as: string
  current: string
  children: React.ReactElement
}

export function ShowService({ as, current, children }: ShowServiceProps) {
  if (as !== current) return null
  return children
}
