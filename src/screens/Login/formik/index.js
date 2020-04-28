import { ScreenName } from 'src/constants/navigationScreenNames';

export const formikConfig = {
  mapPropsToValues: () => ({ login: '', password: '' }),
  handleSubmit: async ({ login, password }, { props: { signInUser }, setSubmitting }) => {
    await signInUser({
      login,
      password
    });

    setSubmitting(false);
  },
  displayName: `${ScreenName.Login}Form`
};
