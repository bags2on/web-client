import React from 'react'
import Carousel from 'nuka-carousel'
import { makeStyles } from '@material-ui/core'
// interface MainSliderProps {}

const useStyles = makeStyles(theme => ({
  root: {
    padding: '15px 0'
  },
  box: {
    borderRadius: '20px'
  }
}))

const MainSlider: React.FC = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Carousel withoutControls wrapAround swiping dragging autoplay>
        <img src="https://via.placeholder.com/350x200/FFFF00/000000?Text=WebsiteBuilders.com" />
        <img src="https://via.placeholder.com/350x200/FF8e00/000000?Text=WebsiteBuilders.com" />
        <img src="https://via.placeholder.com/350x200/FF1100/000000?Text=WebsiteBuilders.com" />
      </Carousel>
    </div>
  )
}

export default MainSlider
