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
    case 'NEW':
      return '#6EBE90'
    case 'TOP':
      return '#a3f271'
    case 'STOCK':
      return '#fd3b3b'
    default:
      return 'lightgray'
  }
}
