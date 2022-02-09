import i18n from '../../../../locales/i18n'

interface FilterItem {
  options: Array<{
    label: string
    value: string
  }>
}

const gender: FilterItem = {
  options: []
}

const availability: FilterItem = {
  options: []
}

const radioGroup: {
  options: Array<{
    label: string
    value: string
    disabled: boolean
  }>
} = {
  options: []
}

const categories: FilterItem = {
  options: []
}

function fillUpValues(): void {
  gender.options = [
    {
      label: i18n.t('catalog.filters.gender.female'),
      value: 'FEMALE'
    },
    {
      label: i18n.t('catalog.filters.gender.male'),
      value: 'MALE'
    },
    {
      label: i18n.t('catalog.filters.gender.unisex'),
      value: 'UNISEX'
    }
  ]

  availability.options = [
    {
      label: i18n.t('catalog.filters.availability.inStock'),
      value: 'inStock'
    },
    {
      label: i18n.t('catalog.filters.availability.byOrder'),
      value: 'byOrder'
    }
  ]

  radioGroup.options = [
    {
      label: i18n.t('catalog.filters.radioGroup.all'),
      value: '',
      disabled: false
    },
    {
      label: i18n.t('catalog.filters.radioGroup.new'),
      value: 'NEW',
      disabled: false
    },
    {
      label: i18n.t('catalog.filters.radioGroup.discounts'),
      value: 'STOCK',
      disabled: false
    }
  ]

  categories.options = [
    {
      label: i18n.t('shared.categories.suitcases'),
      value: 'SUITCASE'
    },
    {
      label: i18n.t('shared.categories.bags'),
      value: 'BAG'
    },
    {
      label: i18n.t('shared.categories.wallets'),
      value: 'WALLET'
    },
    {
      label: i18n.t('shared.categories.backpack'),
      value: 'BACKPACK'
    },
    {
      label: i18n.t('shared.categories.other'),
      value: 'OTHER'
    }
  ]
}

fillUpValues()

i18n.on('languageChanged', (): void => {
  fillUpValues()
})

export default { gender, availability, radioGroup, categories }
