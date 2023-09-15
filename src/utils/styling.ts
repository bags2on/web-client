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

export const getProductMainTagColor = (name: string): string => {
  switch (name) {
    case 'new':
      return '#6EBE90'
    case 'top':
      return '#a3f271'
    case 'stock':
      return '#fd3b3b'
    default:
      return 'lightgray'
  }
}
