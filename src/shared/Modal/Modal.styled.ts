import styled from 'styled-components'
import Modal from 'styled-react-modal'
import IconButton from '../IconButton'
import SvgIcon from '../SvgIcon'

export const StyledModal = Modal.styled`
  position: relative;
  border-radius: 10px;
  border: 5px solid #4c4c4c;
  margin: 0;
`

export const ModalInner = styled.div`
  background-color: ${({ theme }) => theme.background};
`

export const CloseButton = styled(IconButton)`
  position: absolute;
  top: 7px;
  right: 15px;
`

export const TheCloseIcon = styled(SvgIcon)`
  fill: orange;
`
