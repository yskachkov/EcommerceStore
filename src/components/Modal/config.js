import { LoginModal, InternetConnectionErrorModal } from './components';

export const ModalName = {
  Login: 'login',
  InternetConnectionError: 'internetConnectionError'
};

export const ModalType = {
  Success: 'success',
  Warning: 'warning',
  Error: 'error'
};

export const modals = {
  [ModalName.Login]: LoginModal,
  [ModalName.InternetConnectionError]: InternetConnectionErrorModal
};
