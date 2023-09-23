import * as yup from 'yup';

export const interestValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string().nullable(),
  category: yup.string().nullable(),
  popularity: yup.number().integer().nullable(),
  user_id: yup.string().nullable().required(),
});
