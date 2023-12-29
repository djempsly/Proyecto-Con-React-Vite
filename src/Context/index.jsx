import React, { useState } from "react";

export const Context = React.createContext()

export const ArticleProvider = ({children}) => {
    // shopping car . count shop
const [count, setCount] = React.useState(0)
    // open Shopping car . 
const [openShoppingCart, setOpenShoppingCart] = React.useState(false)
const isOpenShoppingCart = ()=>{
    setOpenShoppingCart(true)
}

const closeOpenShoppingCart =()=>{
    setOpenShoppingCart(false)
}
//show prodduct
const [showProductCart, setShowProductCart] = React.useState({})
// showProducttoCart
const [showCart, setShowCart] = useState([])

    return(
        <Context.Provider value={{
            count, 
            setCount,
            openShoppingCart,
            isOpenShoppingCart,
            showProductCart, 
            setShowProductCart,
            closeOpenShoppingCart,
            showCart, 
            setShowCart

        }} >
            {children}
        </Context.Provider>
        
    )
}

