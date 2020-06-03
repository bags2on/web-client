import { CSSProperties } from '@material-ui/core/styles/withStyles'

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
