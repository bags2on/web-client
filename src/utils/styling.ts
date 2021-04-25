import type { CSSProperties } from '@material-ui/core/styles/withStyles'

/*
  boxShadow: '0 1px 0 rgb(12 13 14 / 15%)', // simple undeline
*/

export const getColorByTagName = (name: string): string => {
  switch (name) {
    case 'new':
      return '#32CD32'
    case 'best price':
      return '#FFA500'
    default:
      return 'lightgray' // default shouldn't be visible
  }
}

export const getColorForMainTagName = (name: string): string => {
  switch (name) {
    case 'new':
      return '#6EBE90'
    case 'top':
      return '#FFC63D'
    case 'stock':
      return '#d81e1e'
    default:
      return 'lightgray' // default shouldn't be visible
  }
}

export const hiddenStyles: CSSProperties = {
  position: 'absolute',
  width: '1px',
  height: '1px',
  margin: '-1px',
  border: 0,
  padding: 0,
  whiteSpace: 'nowrap',
  clipPath: 'insert(100%)',
  clip: 'rect(0 0 0 0)',
  overflow: 'hidden'
}
