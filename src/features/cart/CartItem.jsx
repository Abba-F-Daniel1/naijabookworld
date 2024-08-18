import React from 'react'
import { useBookstore } from '../../context/BookstoreContext'
import Button from '../../components/ui/Button'

const CartItem = ({ book }) => {
  const { dispatch } = useBookstore()

  const handleRemoveFromCart = () => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: book })
  }

  return (
    <div className="flex items-center justify-between border-b py-4">
      <div className="flex items-center">
        <img src={book.cover} alt={book.title} className="w-16 h-24 object-cover mr-4" />
        <div>
          <h3 className="text-lg font-semibold dark:text-white">{book.title}</h3>
          <p className="text-gray-600 dark:text-gray-400">{book.author}</p>
          <p className="text-african-gold font-semibold">${book.price.toFixed(2)}</p>
        </div>
      </div>
      <Button onClick={handleRemoveFromCart}>Remove</Button>
    </div>
  )
}

export default CartItem
