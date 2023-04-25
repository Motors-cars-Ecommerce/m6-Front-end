import * as yup from 'yup';

export const userSchema = yup.object().shape({
  id: yup.string().required(),
  name: yup.string().required(),
  email: yup.string().email().required(),
  course_module: yup.string().required(),
  bio: yup.string().required(),
  contact: yup.string().required(),
});

export const loginUserSchema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().email().required()
})



