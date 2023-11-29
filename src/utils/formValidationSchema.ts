import * as yup from 'yup'

export const LoginSchema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().required()
})

export const TopSearchSchema = yup.object({
  searchQuery: yup.string()
})

export const CheckoutOrderSchema = yup.object({
  name: yup.string().max(30, '* максимум 30 символов').required('* обязательное поле'),
  surname: yup.string().max(30, '* максимум 30 символов').required('* обязательное поле'),
  email: yup.string().email('* некорректный email').required('* обязательное поле'),
  phone: yup.string().min(10, '* недостаточно значений').required('* обязательное поле'),
  cityId: yup.string().required('* обязательное поле'),
  postOfficeId: yup.string().required('* обязательное поле'),
  supplier: yup.string().required(),
  '_np-delivery-type': yup.string().required()
})

export const AccountSettingsSchema = yup.object({
  name: yup.string().max(30, '* максимум 30 символов'),
  surname: yup.string().max(30, '* максимум 30 символов'),
  email: yup.string().email('* некорректный email'),
  phone: yup.string().min(10, '* недостаточно значений'),
  city: yup.string()
})

export const JoinUsSchema = yup.object({
  email: yup.string().email().max(70).required()
})

export type LoginSchemaType = yup.InferType<typeof LoginSchema>
export type TopSearchType = yup.InferType<typeof TopSearchSchema>
export type CheckoutOrderType = yup.InferType<typeof CheckoutOrderSchema>
export type JoinUsSchemaType = yup.InferType<typeof JoinUsSchema>
export type AccountSettingsSchemaType = yup.InferType<typeof AccountSettingsSchema>
