import { connect } from 'react-redux';

import { getState } from 'src/store/modal/selectors';
import { modalActions } from 'src/store/modal';
import { Modal } from './Modal';

const mapStateToProps = state => ({
  modal: getState(state)
});

const mapActionCreatorsToProps = {
  ...modalActions
};

export const AppModal = connect(mapStateToProps, mapActionCreatorsToProps)(Modal);
