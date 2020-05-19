import { Alert } from 'react-native';
import { httpService } from 'src/services/httpService';

export const formikConfig = {
  mapPropsToValues: () => ({ login: '', password: '' }),
  handleSubmit: async ({ login, password }, { resetForm, setSubmitting }) => {
    const data = new FormData();

    data.append('loginname', login);
    data.append('password', password);

    try {
      await httpService({
        url: 'https://34.73.95.65/index.php?rt=a/account/login',
        method: 'post',
        data
      });

      Alert.alert(`Welcome back ${login}!`);
      resetForm();
    } catch {
      Alert.alert('Wrong login or password');
    }

    setSubmitting(false);
  },
  displayName: 'LoginForm'
};
