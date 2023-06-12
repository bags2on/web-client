export interface IFilterItem {
  label: string
  value: string
  disabled?: boolean
}

export interface FilterSection {
  // options: Partial<IFilterItem>[]
  options: IFilterItem[]
}

const gender: FilterSection = {
  options: [
    {
      label: 'catalog:filters.gender.female',
      value: 'FEMALE'
    },
    {
      label: 'catalog:filters.gender.male',
      value: 'MALE'
    },
    {
      label: 'catalog:filters.gender.unisex',
      value: 'UNISEX'
    }
  ]
}

const availability: FilterSection = {
  options: [
    {
      label: 'catalog:filters.availability.inStock',
      value: 'inStock'
    },
    {
      label: 'catalog:filters.availability.byOrder',
      value: 'byOrder'
    }
  ]
}

const tags: FilterSection = {
  options: [
    {
      label: 'catalog:filters.tag.all',
      value: '',
      disabled: false
    },
    {
      label: 'catalog:filters.tag.new',
      value: 'NEW',
      disabled: false
    },
    {
      label: 'catalog:filters.tag.discounts',
      value: 'STOCK',
      disabled: false
    }
  ]
}

const categories: FilterSection = {
  options: [
    {
      label: 'catalog:filters.categories.suitcases',
      value: 'SUITCASE'
    },
    {
      label: 'catalog:filters.categories.bags',
      value: 'BAG'
    },
    {
      label: 'catalog:filters.categories.wallets',
      value: 'WALLET'
    },
    {
      label: 'catalog:filters.categories.backpack',
      value: 'BACKPACK'
    },
    {
      label: 'catalog:filters.categories.other',
      value: 'OTHER'
    }
  ]
}

const data = {
  gender,
  availability,
  tags,
  categories
}

export default data
