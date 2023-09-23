import * as yup from 'yup';

export const profileValidationSchema = yup.object().shape({
  bio: yup.string().nullable(),
  gender: yup.string().nullable(),
  preference: yup.string().nullable(),
  location: yup.string().nullable(),
  last_active: yup.date().nullable(),
  user_id: yup.string().nullable().required(),
});
