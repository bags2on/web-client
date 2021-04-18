import { CSSProperties } from '@material-ui/core/styles/withStyles'

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

// name: 'new' | 'top' | 'stock' TODO: iplement on the server
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

export const waveStyle: CSSProperties = {
  width: '100%',
  height: '100%',
  borderTopLeftRadius: '8px',
  borderTopRightRadius: '8px',
  transition: '0.3s',
  background: 'linear-gradient(-90deg, #efefef 0%, #fcfcfc 50%, #efefef 100%)',
  backgroundSize: '400% 400%',
  opacity: 0.8
}
