import * as yup from 'yup';

export const companyValidationSchema = yup.object().shape({
  description: yup.string().nullable(),
  founded_date: yup.date().nullable(),
  address: yup.string().nullable(),
  city: yup.string().nullable(),
  country: yup.string().nullable(),
  name: yup.string().required(),
  user_id: yup.string().nullable().required(),
});
