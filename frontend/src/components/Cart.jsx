// import React from 'react'
// import { useSelector } from 'react-redux'
// import { selectCartItems } from '../redux/cartSlice'

// const Cart = () => {
//     const cartItems = useSelector(selectCartItems);
//   return (
//     <>
//         {console.log(cartItems)}
//         <div className='text-2xl h-screen'>Cart: {cartItems[0].name}</div>

//     </>
//   )
// }

// export default Cart








// isme saari values useSelector ke through aayegi. cartSlice mei ek function h jo saare cart ke present items deta ho. 

// uper wale code se dekh lena vo working h. uper wale code ke according hi krna h.

import { useState } from "react";
import { Minus, Plus, Trash2 } from "lucide-react";
import { useNavigate } from "react-router";
import { selectCartItems } from "../redux/cartSlice";
import { useSelector } from "react-redux";
import { ShoppingCart, ArrowLeft } from 'lucide-react';

// const initialCart = [
//   {
//     id: 1,
//     name: "Grey Parachute Pants",
//     price: 1499,
//     size: "S",
//     color: "Grey",
//     quantity: 1,
//     image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-MjlF52S90jM8IgQhTKviC8VWphSlY8.png",
//   },
//   {
//     id: 2,
//     name: "Everyday Hoodie - Jungle Green",
//     price: 1499,
//     size: "Small",
//     quantity: 2,
//     image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-MjlF52S90jM8IgQhTKviC8VWphSlY8.png",
//   },
// ];

export default function ShoppingCarts() {
  const initialCart = useSelector(selectCartItems);
  const [cart, setCart] = useState(initialCart);
  const navigate = useNavigate();

  const updateQuantity = (id, delta) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
      )
    );
  };

  const removeItem = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const totalAmount = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if(cart.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8 text-center">
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-gray-100 rounded-full" />
              <ShoppingCart className="w-16 h-16 text-gray-300" strokeWidth={1.5} />
            </div>
          </div>
          
          <h2 className="mt-6 text-2xl font-semibold text-gray-900">Your cart is empty</h2>
          <p className="mt-2 text-gray-500">
            Looks like you haven't added anything to your cart yet.
          </p>
          
          <button
            className="mt-8 w-full flex items-center justify-center gap-2 bg-indigo-600 text-white py-3 px-4 rounded-lg hover:bg-indigo-700 transition duration-200"
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Continue Shopping</span>
          </button>
          
          <p className="mt-4 text-sm text-gray-400">
            Free shipping on all orders over $50
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">Your cart</h1>
        <div onClick={() => navigate(-1)} className="text-primary cursor-pointer underline hover:text-primary/90">
          Continue shopping
        </div>
      </div>

      <div className="mb-8">
        <div className="grid grid-cols-[2fr,1fr,1fr] gap-4 mb-4 text-sm text-muted-foreground uppercase">
          <div>PRODUCT</div>
          <div className="text-center">QUANTITY</div>
          <div className="text-right">TOTAL</div>
        </div>

        {cart.map((item) => (
          <div key={item.id} className="grid grid-cols-[2fr,1fr,1fr] gap-4 py-6 border-t">
            <div className="flex gap-4">
              <img src={item.image} alt={item.name} width={120} height={120} className="rounded-md" />
              <div>
                <p className="text-xs text-muted-foreground">URBANNEEDSINDIA</p>
                <h3 className="font-medium mb-1">{item.name}</h3>
                <p className="text-sm mb-1">Rs. {item.price.toFixed(2)}</p>
                <p className="text-sm text-muted-foreground">Size: {item.size}</p>
                {item.color && <p className="text-sm text-muted-foreground">Color: {item.color}</p>}
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div className="flex items-center border border-gray-600  rounded-md">
                <button className="h-8 w-8" onClick={() => updateQuantity(item.id, -1)}>
                  <Minus className="h-3 w-3 m-auto" />
                </button>
                <input type="number" value={item.quantity} readOnly className="w-12 h-8 m-auto text-center text-black bg-white border-x" />
                <button className="h-8 w-8" onClick={() => updateQuantity(item.id, 1)}>
                  <Plus className="h-3 w-3 m-auto" />
                </button>
              </div>
              <button className="ml-2" onClick={() => removeItem(item.id)}>
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
            <div className="text-right">Rs. {(item.price * item.quantity).toFixed(2)}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-8">
        <div>
          <label className="block text-sm mb-2">Order special instructions</label>
          <textarea placeholder="Special instructions for your order" className="w-full bg-white text-black border border-gray-600 rounded-md p-2" />
        </div>
        <div className="space-y-4">
          <div className="flex justify-between items-center text-lg font-medium">
            <span>Estimated total</span>
            <span>Rs. {totalAmount.toFixed(2)}</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Tax included. <a href="/shipping" className="underline">Shipping</a> and discounts calculated at checkout.
          </p>
          <button className="w-full text-white bg-blue-600 px-4 py-2 rounded-lg">Checkout</button>
        </div>
      </div>
    </div>
  );
}
