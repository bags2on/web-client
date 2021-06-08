import React from 'react'
import Dialog from '@material-ui/core/Dialog'
import Slide from '@material-ui/core/Slide'
import CloseIcon from '@material-ui/icons/Close'
import IconButton from '@material-ui/core/IconButton'
import { makeStyles } from '@material-ui/core'
import { TransitionProps } from '@material-ui/core/transitions'

interface ModalProps {
  open: boolean
  onClose(): void
}

const useStyles = makeStyles(() => ({
  paper: {
    maxWidth: 'none',
    borderRadius: '10px',
    border: '5px solid #4c4c4c'
  },
  closeButton: {
    position: 'absolute',
    top: 7,
    right: 15,
    '&:hover': {
      backgroundColor: 'transparent'
    }
  }
}))

const Transition = React.forwardRef(function Transition(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  props: TransitionProps & { children?: React.ReactElement<any, any> },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />
})

const Modal: React.FC<ModalProps> = ({ children, open, onClose }) => {
  const classes = useStyles()

  const handleClose = () => {
    onClose()
  }

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      TransitionComponent={Transition}
      classes={{
        paper: classes.paper
      }}
    >
      {children}
      <IconButton disableRipple onClick={handleClose} className={classes.closeButton}>
        <CloseIcon />
      </IconButton>
    </Dialog>
  )
}

export default Modal
