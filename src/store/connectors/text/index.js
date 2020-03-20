import { connect } from 'react-redux';

import { getText } from 'src/store/text/selectors';
import { textActions } from 'src/store/text';

const mapStateToProps = state => ({
  text: getText(state)
});

const mapActionCreatorsToProps = {
  ...textActions
};

export default connect(mapStateToProps, mapActionCreatorsToProps);
