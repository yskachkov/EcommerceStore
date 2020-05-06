import { connect } from 'react-redux';

import { Header as HeaderComponent } from './Header';
import { getCartTotalQuantity } from 'src/store/checkout/selectors';

const mapStateToProps = state => ({
  cartTotalQuantity: getCartTotalQuantity(state)
});

export const Header = connect(mapStateToProps)(HeaderComponent);
