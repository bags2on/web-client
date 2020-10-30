import React from 'react'
import { makeStyles } from '@material-ui/core'
import { GlassMagnifier } from 'react-image-magnifiers'

interface PreviewProps {}

const useStyles = makeStyles(() => ({
  root: {},
  container: {
    display: 'flex'
  },
  list: {
    listStyle: 'none'
  },
  image: {
    width: 80,
    height: 80
  }
}))

const sideImages = [
  'https://res.cloudinary.com/dct4oinuz/image/upload/v1604066892/bags2on/products/product_t_toazvb.jpg',
  'https://res.cloudinary.com/dct4oinuz/image/upload/v1604066892/bags2on/products/product_t_toazvb.jpg',
  'https://res.cloudinary.com/dct4oinuz/image/upload/v1604066892/bags2on/products/product_t_toazvb.jpg'
]

const Preview: React.FC<PreviewProps> = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <GlassMagnifier imageSrc={sideImages[0]} imageAlt="Example" largeImageSrc={sideImages[0]} />

        <ul className={classes.list}>
          {sideImages.map((url, index) => (
            <li key={index}>
              <img src={url} alt="product" className={classes.image} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Preview
