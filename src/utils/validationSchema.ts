import * as yup from 'yup'

export const LoginSchema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().required()
})

export const TopSearchSchema = yup.object({
  searchQuery: yup.string().required()
})

export const CheckoutOrderSchema = yup.object({
  name: yup.string().required('* обязательное поле'),
  surname: yup.string().required('* обязательное поле'),
  email: yup.string().email().required('* обязательное поле'),
  phone: yup.number().required('* обязательное поле'),
  cityId: yup.string().required('* обязательное поле'),
  postOfficeId: yup.string().required('* обязательное поле')
})

export const JoinUsSchema = yup.object({
  email: yup.string().email().required()
})

export type LoginSchemaType = yup.InferType<typeof LoginSchema>
export type TopSearchType = yup.InferType<typeof TopSearchSchema>
export type CheckoutOrderType = yup.InferType<typeof CheckoutOrderSchema>
export type JoinUsSchemaType = yup.InferType<typeof JoinUsSchema>
