import React from 'react'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import Button from '../../../shared/Button/Button'
import { ReactComponent as EmptyCartIcon } from '../../../assets/svg/emptycart.svg'
import { makeStyles } from '@material-ui/core'

interface ResponsePlugProps {
  text: string
  onClose(): void
}

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
  content: {
    padding: '0 15px',
    '& > svg': {
      width: '100%',
      height: 'auto',
      fill: 'gray'
    },
    '& > p': {
      fontSize: 20,
      fontWeight: 500,
      textAlign: 'center'
    }
  }
}))

const ResponsePlug: React.FC<ResponsePlugProps> = ({ text, onClose }) => {
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <div className={classes.content}>
        <EmptyCartIcon />
        <Typography component="p">{text}</Typography>
      </div>
      <Box margin="0 auto" width="130px" marginTop="50px">
        <Button fullWidth onClick={onClose} darkLoader color="secondary" startIcon={<ArrowBackIosIcon />}>
          Назад
        </Button>
      </Box>
    </Box>
  )
}

export default ResponsePlug
