import * as yup from 'yup';

export const activityValidationSchema = yup.object().shape({
  activity_type: yup.string().nullable(),
  activity_date: yup.date().nullable(),
  description: yup.string().nullable(),
  location: yup.string().nullable(),
  status: yup.string().nullable(),
  user_id: yup.string().nullable().required(),
});
