import React from 'react'
import { makeStyles } from '@material-ui/core'

interface ItemsHeader {}

const useStyles = makeStyles(() => ({
  root: {}
}))

const ItemsHeader: React.FC<ItemsHeader> = () => {
  return (
    <div>
      <p>Header</p>
    </div>
  )
}

export default ItemsHeader
