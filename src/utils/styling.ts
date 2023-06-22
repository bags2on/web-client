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
      return '#00d058'
    case 'TOP':
      return '#FFC63D'
    case 'STOCK':
      return '#d81e1e'
    default:
      return 'lightgray'
  }
}
