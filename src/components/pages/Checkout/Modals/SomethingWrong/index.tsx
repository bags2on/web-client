import React from 'react'
import { Modal } from '@/components/Modal'

interface SomethingWrongModalProps {
  open: boolean
}

export function SomethingWrongModal({ open }: SomethingWrongModalProps) {
  return <Modal open={false}>SomethingWrong Modal</Modal>
}
