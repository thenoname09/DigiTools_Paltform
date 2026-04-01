import React from 'react';
import { toast } from 'react-toastify';

const Cart = ({ cartItems, setCartItems }) => {

     const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0)

     const handlePayment = () => {
         setCartItems([]) 
        toast.info("Checkout Complete")
        }


   const cartRemove = (item) => {
      
    const filteredArray = cartItems.filter((card) => card.id !== item.id);
    setCartItems(filteredArray);

    toast.error("Item Remove to cart!")
  
        }


       
 console.log(cartItems);
    return (
    <div className=' p-4  '>
            <h1 className='text-2xl font-bold'>Your Cart</h1>

        {
          cartItems.length === 0 ? <p className="text-center text-2xl p-5 font-bold">Cart is empty</p> : <>
          
        <div className='space-y-3 mt-4 '>
            {
            cartItems.map((item) => <div  key ={item.id} >

                <div className='flex justify-between p-4 items-center rounded-2xl border bg-[#F9FAFC] border-stone-300'>

                  <div className='flex gap-3 items-center '>
                          <img className='w-15 rounded-full max-w-15 p-3  border border-stone-300' src={item.icon} alt="" />
                         <div>
                             <h2 className='text-2xl  font-bold '>{item.name}</h2>
                             <h3 className='text-[#627382FF] font-medium text-sm'>${item.price}</h3>
                         </div>
                    
                   </div>
                <div>
                    <button  onClick={() => cartRemove(item)}  className='btn'>Remove</button>
                </div>

                </div>
                    
            </div> )


            }


             <div className=' flex justify-between items-center m-2 p-4 pr'>
                <p className='text-xl text-stone-500'>Total:</p>
                <p className='text-2xl font-bold'>${totalPrice}</p>
         </div>

        

        <button onClick={handlePayment} className='btn text-[16px] w-full rounded-full p-6 font-bold text-white bg-linear-to-l from-[#4f39f6] to-[#9514fa]'>Proceed to Checkout</button>




        </div>
          </>

        }



        
     </div>
    );
};

export default Cart;