import React, { createContext } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
	return (
		<CartContext.Provider>
			{children}
		</CartContext.Provider>
	)
}