import {
  Input,
  object,
  string,
  minLength,
  maxLength,
  toTrimmed,
  email,
  length,
  merge,
  optional
} from 'valibot'

export const customerInfoSchema = object({
  name: string([
    toTrimmed(),
    minLength(1, '* минимум 1 символ'),
    maxLength(30, '* максимум 30 символов')
  ]),
  surname: string([
    toTrimmed(),
    minLength(1, '* минимум 1 символ'),
    maxLength(30, '* максимум 30 символов')
  ]),
  email: string([
    toTrimmed(),
    minLength(3, '* введите email'),
    email('The email is badly formatted.'),
    maxLength(70, '* максимум 70 символов')
  ]),
  phone: string([toTrimmed(), length(10, 'The array must contain 10 numbers.')])
})

export const deliverySchema = object({
  supplier: string(),
  //   todo: it's not optional
  cityName: optional(string()),
  postOfficeName: optional(string())
})

export const validationSchema = merge([customerInfoSchema, deliverySchema])

export type FormValues = Input<typeof validationSchema>
export type CustomerInfoValues = Input<typeof customerInfoSchema>
export type DeliveryValues = Input<typeof deliverySchema>
