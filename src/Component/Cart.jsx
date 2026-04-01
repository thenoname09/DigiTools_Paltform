import React from 'react';

const Cart = ({ cartItems, setCartItems }) => {

     const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0)

    return (
        <div className=' p-4  '>
            <h1 className='text-2xl font-bold'>Your Cart</h1>

        <div className='space-y-3 mt-4 '>
            {
            cartItems.map((item) => <div  key ={item.id} >

                <div className='flex justify-between p-4 items-center rounded-2xl border bg-[#F9FAFC] border-stone-300'>

                  <div className='flex gap-3 items-center '>
                          <img className='w-15 rounded-full max-w-15 p-3  border border-stone-300' src={item.icon} alt="" />
                         <div>
                             <h2 className='text-2xl  font-bold '>{item.name}</h2>
                             <h3 className='text-[#627382FF] font-medium text-sm"'>${item.price}</h3>
                         </div>
                    
                   </div>
                <div>
                    <button className='btn'>Remove</button>
                </div>

                </div>
                    
            </div> )
            }
        </div>

        <div className='p-4'>
            <div className=' flex justify-between items-center m-2 p-4'>
                <p className='text-xl text-stone-500'>Total:</p>
                <p className='text-2xl font-bold'>${totalPrice}</p>
            </div>

        </div>

        </div>
    );
};

export default Cart;