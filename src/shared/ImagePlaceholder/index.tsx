import React from 'react'
import { ReactComponent as Placeholder } from '../../assets/svg/image_placeholder.svg'
import ProgressiveImage from 'react-progressive-graceful-image'
import { waveStyle } from '../../utils/styling'
import { makeStyles } from '@material-ui/core'

export interface ImagePlaceholderProps {
  previewImage: string
  altText: string
}

const useStyles = makeStyles(() => ({
  root: {},
  picBox: {
    display: 'block',
    outline: 'none',
    position: 'relative',
    paddingTop: '100%',
    overflow: 'hidden',
    transform: 'translatez(0)'
  },
  productImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    maxWidth: '100%',
    maxHeight: '100%',
    margin: 'auto',
    outline: 'none',
    objectFit: 'cover',
    borderTopLeftRadius: '8px',
    borderTopRightRadius: '8px'
  },
  shine: {
    ...waveStyle,
    animation: '$shine 1.3s infinite'
  },
  productBox: {
    position: 'absolute',
    outline: 'none',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  '@keyframes shine': {
    '0%': {
      backgroundPosition: '0% 0%'
    },
    '100%': {
      backgroundPosition: ' -135% 0%'
    }
  }
}))

const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({ previewImage, altText }) => {
  const classes = useStyles()

  const plug = (
    <div className={classes.productImage}>
      <div className={classes.shine} />
      <div className={classes.productBox}>
        <Placeholder height={50} width={50} />
      </div>
    </div>
  )

  return (
    <picture className={classes.picBox}>
      <ProgressiveImage src={previewImage} placeholder="">
        {(src: string, loading: boolean): JSX.Element => {
          return loading ? plug : <img src={src} alt={altText} className={classes.productImage} />
        }}
      </ProgressiveImage>
    </picture>
  )
}

export default ImagePlaceholder
