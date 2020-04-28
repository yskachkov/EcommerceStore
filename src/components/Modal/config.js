import { colors } from 'src/assets/styles/colors';
import { LoginToContinueModal, InternetConnectionErrorModal, SignInErrorModal } from './components';

export const ModalName = {
  LoginToContinue: 'LoginToContinue',
  InternetConnectionError: 'internetConnectionError',
  SignInError: 'SignInError'
};

export const ModalType = {
  Success: 'success',
  Warning: 'warning',
  Error: 'error'
};

export const icons = {
  [ModalType.Success]: {
    name: 'check-circle',
    color: colors.feijoa
  },
  [ModalType.Warning]: {
    name: 'exclamation-circle',
    color: colors.manhattan
  },
  [ModalType.Error]: {
    name: 'times-circle',
    color: colors.froly
  }
};

export const modals = {
  [ModalName.LoginToContinue]: LoginToContinueModal,
  [ModalName.InternetConnectionError]: InternetConnectionErrorModal,
  [ModalName.SignInError]: SignInErrorModal
};
