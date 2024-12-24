import { createContext } from "react";
import { products } from "../assets/assets";
export const ShopContext = createContext();

const ShopContextProvider = (props)=>{
    
    const currency = "$";
    const delivey_fee = 10;


    const value = {
        products,currency,delivey_fee
    }

    return(
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;