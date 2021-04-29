import { useDispatch, useSelector } from 'react-redux'
import classes from './CartButton.module.css';
import { uiActions } from '../../store/ui-slice'

const CartButton = (props) => {
  const dispatch = useDispatch();

  const toogleCartHanlder = () => {
    dispatch(uiActions.toogle())
  }

  const cartQantity = useSelector(state => state.cart.totalQuantity)

  return (
    <button className={classes.button} onClick={toogleCartHanlder}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQantity}</span>
    </button>
  );
};

export default CartButton;
