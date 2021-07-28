import type { CSSProperties } from '@material-ui/core/styles/withStyles'

export const getColorByTagName = (name: string): string => {
  switch (name) {
    case 'new':
      return '#32CD32'
    case 'best price':
      return '#FFA500'
    default:
      return 'lightgray'
  }
}

export const getColorForMainTagName = (name: string): string => {
  switch (name) {
    case 'NEW':
      return '#6EBE90'
    case 'TOP':
      return '#FFC63D'
    case 'STOCK':
      return '#d81e1e'
    default:
      return 'lightgray'
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
  clipPath: 'inset(100%)',
  clip: 'rect(0 0 0 0)',
  overflow: 'hidden'
}
