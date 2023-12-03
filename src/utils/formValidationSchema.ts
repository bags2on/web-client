import { object, string, InferType } from 'yup'

export const LoginSchema = object({
  email: string().email().required(),
  password: string().required()
})

export const TopSearchSchema = object({
  searchQuery: string()
})

export const CheckoutOrderSchema = object({
  name: string().max(30, '* максимум 30 символов').required('* обязательное поле'),
  surname: string().max(30, '* максимум 30 символов').required('* обязательное поле'),
  email: string().email('* некорректный email').required('* обязательное поле'),
  phone: string().min(10, '* недостаточно значений').required('* обязательное поле'),
  supplier: string().required(),
  cityName: string().required('* обязательное поле'),
  postOfficeName: string().required('* обязательное поле'),
  '_np-delivery-type': string().required()
})

export const AccountSettingsSchema = object({
  name: string().max(30, '* максимум 30 символов'),
  surname: string().max(30, '* максимум 30 символов'),
  email: string().email('* некорректный email'),
  phone: string().min(10, '* недостаточно значений'),
  city: string()
})

export const JoinUsSchema = object({
  email: string().email().max(70).required()
})

export type LoginSchemaType = InferType<typeof LoginSchema>
export type TopSearchType = InferType<typeof TopSearchSchema>
export type CheckoutOrderType = InferType<typeof CheckoutOrderSchema>
export type JoinUsSchemaType = InferType<typeof JoinUsSchema>
export type AccountSettingsSchemaType = InferType<typeof AccountSettingsSchema>
