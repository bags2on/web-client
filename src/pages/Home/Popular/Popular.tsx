import React from 'react'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core'
import DragSlider from '../../../components/DragSlider/DragSlider'
import FlexItem from '../../../shared/FlexItem'

const useStyles = makeStyles(() => ({
  root: {
    padding: '3px 10px 10px 10px',
    marginBottom: '15px'
  },
  title: {
    fontSize: '23px',
    fontWeight: 600,
    marginLeft: '10px',
    marginBottom: '15px'
  }
}))

const Popular: React.FC = () => {
  const classes = useStyles()

  return (
    <section className={classes.root}>
      <Typography className={classes.title} component="h2">
        Популярное
      </Typography>
      <div
        style={{
          overflowX: 'hidden'
        }}
      >
        <DragSlider>
          {[...Array(10).keys()].map((item, key) => (
            <FlexItem key={key} width={270}>
              {item + 1}
            </FlexItem>
          ))}
        </DragSlider>
      </div>
    </section>
  )
}

export default Popular
