import React from 'react'
import { ReactComponent as Placeholder } from '../../assets/svg/image_placeholder.svg'
import ProgressiveImage from 'react-progressive-graceful-image'
import { waveStyle } from '../../utils/styling'
import { makeStyles } from '@material-ui/core'

export interface ImagePlaceholderProps {
  plain?: boolean
  src: string
  altText: string
}

interface StyleProps {
  plain: boolean
}

const useStyles = makeStyles(() => ({
  root: {
    display: 'block',
    outline: 'none',
    position: 'relative',
    overflow: 'hidden',
    transform: 'translatez(0)',
    paddingTop: (props: StyleProps): string => (props.plain ? '0px' : '100%'),
    height: (props: StyleProps): string => (props.plain ? '100%' : 'auto')
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
    userSelect: 'none',
    borderTopLeftRadius: '8px',
    borderTopRightRadius: '8px'
  },
  shine: {
    ...waveStyle,
    animation: '$shine 1.3s infinite',
    borderTopLeftRadius: (props: StyleProps): string => (props.plain ? '0' : '8px'),
    borderTopRightRadius: (props: StyleProps): string => (props.plain ? '0' : '8px')
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

const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({ plain = false, src, altText }) => {
  const classes = useStyles({ plain })

  const placeholderPlug = (
    <div className={classes.productImage}>
      <div className={classes.shine} />
      <div className={classes.productBox}>
        <Placeholder height={50} width={50} />
      </div>
    </div>
  )

  const plainPlug = <div className={classes.shine} />

  const plug = plain ? plainPlug : placeholderPlug

  return (
    <picture className={classes.root}>
      <ProgressiveImage src={src} placeholder="">
        {(src: string, loading: boolean): JSX.Element => {
          return loading ? plug : <img src={src} alt={altText} className={classes.productImage} />
        }}
      </ProgressiveImage>
    </picture>
  )
}

export default ImagePlaceholder
