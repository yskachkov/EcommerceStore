import { ScreenName } from 'src/constants/screenNames';

export const formikConfig = {
  mapPropsToValues: () => ({ fullName: '', email: '', password: '', confirmPassword: '' }),
  handleSubmit: (values, { setSubmitting }) => {
    console.log(`New user: ${JSON.stringify(values, null, 2)}`);

    setSubmitting(false);
  },
  displayName: `${ScreenName.SignUp}Form`
};
