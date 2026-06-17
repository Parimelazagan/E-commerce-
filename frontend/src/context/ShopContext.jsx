import { createContext } from "react"; // using context API to access the products data across the app without prop drilling 
import { products } from "../assets/assets";

export const ShopContext = createContext();     // Create a context for the shop

const ShopContextProvider = (props) => {        // Create a provider component for the shop context

  const currency = "$";
  const delivery_fee = 10;

  const value = {
    products,
    currency,
    delivery_fee
  };

  return (
    <ShopContext.Provider value={value}>        
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;