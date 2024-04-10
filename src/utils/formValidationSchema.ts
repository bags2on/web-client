import { object, string, InferType } from 'yup'

export const LoginSchema = object({
  email: string().email().required(),
  password: string().required()
})

export const TopSearchSchema = object({
  searchQuery: string()
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
export type JoinUsSchemaType = InferType<typeof JoinUsSchema>
export type AccountSettingsSchemaType = InferType<typeof AccountSettingsSchema>
