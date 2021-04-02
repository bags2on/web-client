export const formatPrice = (num: number): string => num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ')
export const formatPhone = (phone: number): string =>
  phone
    .toString()
    .replace(/[^\d]/g, '')
    .replace(/(\d{3})(\d{3})(\d{4})/, '($1)-$2-$3')
