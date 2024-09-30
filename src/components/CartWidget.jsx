import { FaShoppingCart } from 'react-icons/fa';
import './cartWidget.css';

function CartWidget() {
    return (
        <>
        <div className="cart-widget">
            <FaShoppingCart size={24} />
        </div>
        <p className='p-carrito'>2</p>
        </>
    );
}

export default CartWidget;
