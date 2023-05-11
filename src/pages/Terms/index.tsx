import React, { useEffect } from 'react'
import UseTerms from './UseTerms'
import UserTerms from './UserTerms'
import PaymentDelivery from './PaymentDelivery'
import { useParams } from 'react-router-dom'

interface ParamsType {
  tabName: 'user-terms' | 'terms-of-site-use' | 'payment-and-delivery'
}

const APP_NAME = process.env.REACT_APP_NAME || '---'
const APP_NAME_RU = process.env.REACT_APP_NAME_RU || '---'

const Terms: React.FC = () => {
  const { tabName } = useParams<ParamsType>()

  useEffect(() => {
    console.log(tabName)
  }, [])

  return (
    <div>
      <UserTerms brandName={APP_NAME} brandNameRu={APP_NAME_RU} />
      <PaymentDelivery />
      <UseTerms brandName={APP_NAME} brandNameRu={APP_NAME_RU} />
    </div>
  )
}

export default Terms
