import React, { createContext, useState } from "react";
import all_product from "../Components/Assets/all_product";

export const ShopContext = createContext(null);

const getDefaultCart = ()=>{
    let cart = {};
    for (let i=0; i<all_product.length + 1 ; i++){
        cart[i]=0
    }
    return cart;
}

const ShopContextProvider = (props)=>{
    const [cartItems, setCartItems] = useState(getDefaultCart()); 
    const addToCart = (id)=>{
        setCartItems({...cartItems, [id]: cartItems[id] + 1})
    }
     
    const removeFromCart = (id)=>{
        setCartItems({...cartItems, [id]: cartItems[id] -  1})
    }

    const getTotalCartAmount = ()=>{
        let totalAmount = 0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                let itemInfo = all_product?.find((product)=>product.id=== Number(item))
                totalAmount += itemInfo.new_price * cartItems[item] 
            }  
        }
        return totalAmount; 
    }
    const getTotalCartItems = () => {
        let totalItems = 0;
        for(const item in cartItems){
            if(cartItems[item]>0){ 
                totalItems += cartItems[item] 
            }
        }
        return totalItems; 
     }
    const contextValue = {getTotalCartAmount, getTotalCartItems, all_product, cartItems, addToCart, removeFromCart} 
     return ( 
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider;