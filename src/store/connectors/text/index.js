import { connect } from 'react-redux';

import { getText } from 'src/store/text/selectors';
import { updateText, updateTextAsync, resetText } from 'src/store/text/actions';

const mapStateToProps = state => ({
  text: getText(state)
});

const mapActionCreatorsToProps = {
  updateText,
  updateTextAsync,
  resetText
};

export default connect(mapStateToProps, mapActionCreatorsToProps);
