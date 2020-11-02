import React from 'react'
import { makeStyles } from '@material-ui/core'
import { SideBySideMagnifier } from 'react-image-magnifiers'

import './styles.scss'

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
  'https://res.cloudinary.com/dct4oinuz/image/upload/v1604332029/bags2on/products/temp/product_1_fuyaph.jpg',
  'https://res.cloudinary.com/dct4oinuz/image/upload/v1604332029/bags2on/products/temp/product_2_nzlwmc.jpg',
  'https://res.cloudinary.com/dct4oinuz/image/upload/v1604332030/bags2on/products/temp/product_3_o97szw.jpg',
  'https://res.cloudinary.com/dct4oinuz/image/upload/v1604332029/bags2on/products/temp/product_4_no1o5b.jpg'
]

const Preview: React.FC<PreviewProps> = () => {
  const classes = useStyles()

  const switchSides = false
  const overlayOpacity = 0.3
  const alwaysInPlace = false

  const image = sideImages[0]
  const largeImage = sideImages[0]

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className="container">
          <SideBySideMagnifier
            className="side-magnifier"
            style={{ order: switchSides ? 1 : 0 }}
            imageSrc={image}
            largeImageSrc={largeImage}
            alwaysInPlace={alwaysInPlace}
            overlayOpacity={overlayOpacity}
            switchSides={switchSides}
            // zoomPosition="left"
            inPlaceMinBreakpoint={641}
            fillAvailableSpace={true}
            fillAlignTop={true}
            fillGapTop={10}
            fillGapRight={10}
            fillGapBottom={10}
            fillGapLeft={10}
            zoomContainerBorder="1px solid #dcdcdc"
            zoomContainerBoxShadow="0 4px 8px rgba(0,0,0,.5)"
          />
        </div>
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
