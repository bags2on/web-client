import React from 'react'
import Drag from '../Drag'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {},
  tmp: {
    margin: 10,
    border: `5px solid ${theme.palette.primary.main}`,
    height: 300
  }
}))

interface PreviewBoxProps {
  images: string[]
}

const PreviewBox: React.FC<PreviewBoxProps> = ({ images }) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Drag images={images} />
    </div>
  )
}

export default PreviewBox
