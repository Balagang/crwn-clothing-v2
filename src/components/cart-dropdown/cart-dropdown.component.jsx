import { useSelector } from 'react-redux/es/hooks/useSelector'
import { useNavigate } from 'react-router'

import Button from '../button/button.component'
import CartItem from '../cart-item/cart-item.component'
import { selectCartItems } from '../../store/cart/cart.selector'

import { 
    CartDropdownContainer, 
    CartItemsContainer, 
    // CheckoutButton, 
    EmptyMessage 
} from './cart-dropdown.styles'

const CartDropdown = () => {
    const cartItems = useSelector(selectCartItems)
    const navigate = useNavigate()

    const goToCheckoutHandler = () => {
        navigate('/checkout')
    }

    return (
        <CartDropdownContainer>
            <CartItemsContainer>
                {cartItems.length ? (cartItems.map((item) => ( 
                <CartItem key={item.id} cartItem={item} />
                ))) : (<EmptyMessage>Your cart is empty</EmptyMessage> 
                )}
            </CartItemsContainer>
            <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
        </CartDropdownContainer>
    )
}

export default CartDropdown