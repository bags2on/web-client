import * as yup from 'yup'

export const LoginSchema = yup.object({
  email: yup
    .string()
    .email()
    .required(),
  password: yup.string().required()
})

export const TopSearchSchema = yup.object({
  searchQuery: yup.string()
})

export type LoginSchemaType = yup.InferType<typeof LoginSchema>
export type TopSearchType = yup.InferType<typeof TopSearchSchema>
