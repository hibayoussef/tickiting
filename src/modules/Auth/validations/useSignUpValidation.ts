// useValidation.ts
import * as yup from 'yup';

export const useSignUpValidation = () => {
  const signInSchema = yup.object().shape({
    email: yup
      .string()
      .email('بريد إلكتروني غير صحيح')
      .required('البريد الإلكتروني مطلوب'),

    password: yup
      .string()
      .required('كلمة المرور مطلوبة')
      .min(6, 'كلمة المرور يجب أن تحتوي على 6 أحرف على الأقل')
      .max(20, 'كلمة المرور يجب أن تحتوي على 20 حرفاً كحد أقصى'),
  });

  return { signInSchema };
};
