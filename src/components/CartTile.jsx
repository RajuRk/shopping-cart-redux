import { useDispatch } from 'react-redux';
import { removeToCart } from '../store/slices/cart-slices';

export default function CartTile({ cartItem }) {
  const dispatch = useDispatch();

  function handleRemoveFromCart() {
    dispatch(removeToCart(cartItem.id));
  }

  return (
    <>
      <div className='flex items-center p-5 justify-between bg-red-500 mt-2 mb-2 rounded-xl'>
        <div className='flex p-3'>
          <img
            src={cartItem?.image}
            className='h-28 rounded-lg'
            alt={cartItem.title}
          />
          <div className='ml-10 self-start space-y-5'>
            <h1 className='text-xl text-white font-bold'>{cartItem?.title}</h1>
            <p className='text-white font-extrabold'>{cartItem?.price}</p>
          </div>
        </div>
        <div>
          <button
            className='bg-red-950 text-white border-2 rounded-lg font-bold p-4'
            onClick={handleRemoveFromCart}
          >
            Remove from cart
          </button>
        </div>
      </div>
    </>
  );
}
