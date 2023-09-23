import * as yup from 'yup';

export const matchValidationSchema = yup.object().shape({
  match_date: yup.date().nullable(),
  match_score: yup.number().integer().nullable(),
  status: yup.string().nullable(),
  user1_id: yup.string().nullable().required(),
  user2_id: yup.string().nullable().required(),
});
