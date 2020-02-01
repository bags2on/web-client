import * as yup from 'yup'

export type LoginSchemaType = yup.InferType<typeof LoginSchema>

export const LoginSchema = yup.object({
  email: yup
    .string()
    .email()
    .required(),
  password: yup.string().required()
})
