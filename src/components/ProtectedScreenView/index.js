import { connect } from 'react-redux';

import { getState } from 'src/store/user/selectors';
import { ProtectedScreenView as ProtectedScreenViewComponent } from './ProtectedScreenView';

const mapStateToProps = state => ({
  user: getState(state)
});

export const ProtectedScreenView = connect(mapStateToProps)(ProtectedScreenViewComponent);
