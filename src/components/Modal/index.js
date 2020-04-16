import { connect } from 'react-redux';

import { getState } from 'src/store/modal/selectors';
import { modalActions } from 'src/store/modal';
import { Modal as ModalComponent } from './Modal';

const mapStateToProps = state => ({
  modal: getState(state)
});

const mapActionCreatorsToProps = {
  ...modalActions
};

export const Modal = connect(mapStateToProps, mapActionCreatorsToProps)(ModalComponent);
