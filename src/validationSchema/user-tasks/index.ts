import * as yup from 'yup';

export const userTaskValidationSchema = yup.object().shape({
  user_id: yup.string().nullable().required(),
  task_id: yup.string().nullable().required(),
});
