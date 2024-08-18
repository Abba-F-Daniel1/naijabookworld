import React from 'react'
import { useBookstore } from '../../context/BookstoreContext'
import Button from '../../components/ui/Button'

const WishlistItem = ({ book }) => {
  const { dispatch } = useBookstore()

  const handleRemoveFromWishlist = () => {
    dispatch({ type: 'REMOVE_FROM_WISHLIST', payload: book })
  }

  const handleAddToCart = () => {
    dispatch({ type: 'ADD_TO_CART', payload: book })
    dispatch({ type: 'REMOVE_FROM_WISHLIST', payload: book })
  }

  return (
    <div className="flex items-center justify-between border-b py-4">
      <div className="flex items-center">
        <img src={book.cover} alt={book.title} className="w-16 h-24 object-cover mr-4" />
        <div className='dark:text-gray-300'>
          <h3 className="text-lg font-semibold">{book.title}</h3>
          <p className="text-gray-400">{book.author}</p>
        </div>
      </div>
      <div className="flex space-x-2">
        <Button onClick={handleAddToCart}>Add to Cart</Button>
        <Button onClick={handleRemoveFromWishlist}>Remove</Button>
      </div>
    </div>
  )
}

export default WishlistItem
