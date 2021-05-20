import React, { ElementType } from 'react'
import clsx from 'clsx'
import Grid, { GridSize } from '@material-ui/core/Grid'

interface ExpandedGridProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: ElementType<any>
  className?: string
  item?: boolean
  container?: boolean
  xs?: boolean | GridSize
  md?: boolean | GridSize
  xl?: boolean | GridSize
  desktop?: boolean | GridSize
}

const ExpandedGrid: React.FC<ExpandedGridProps> = ({ desktop, ...other }) => {
  const classes = clsx({
    [`MuiGrid-grid-desktop-${desktop}`]: Boolean(desktop)
  })
  return <Grid className={classes} {...other} />
}

export default ExpandedGrid
