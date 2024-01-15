import React from 'react'

export interface ConditionalRenderProps {
  condition: boolean
  wrap: (child: React.ReactNode) => React.ReactNode
  children: React.ReactNode
}

export function ConditionalRender({ condition, wrap, children }: ConditionalRenderProps) {
  return condition ? wrap(children) : <>{children}</>
}
