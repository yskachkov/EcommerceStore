export const formikConfig = {
  mapPropsToValues: () => ({ email: '', password: '' }),
  handleSubmit: ({ email, password }, { setSubmitting }) => {
    console.log(`Email: ${email}`);
    console.log(`password: ${password}`);

    setSubmitting(false);
  },
  displayName: 'LoginForm'
};
