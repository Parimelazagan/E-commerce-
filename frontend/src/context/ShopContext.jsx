import { createContext } from "react"; // using context API to access the products data across the app without prop drilling 
import { products } from "../assets/assets";
import {useState,useEffect} from "react";
import { ToastContainer , toast } from "react-toastify";
import { useNavigate} from "react-router-dom";

export const ShopContext = createContext();     // Create a context for the shop

const ShopContextProvider = (props) => {        // Create a provider component for the shop context

  const currency = "₹";
  const delivery_fee = 10;
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems,setCartItems]= useState({});
  const navigate = useNavigate();

  const addToCart=(itemId,size)=>{

    if (size === ""){
      toast.error(" Please select a size ");
      return;
    }

    let cartData = structuredClone(cartItems);


    if(cartData[itemId]){
      if(cartData[itemId][size]){
        cartData[itemId][size]+=1;
      }
      else {
        cartData[itemId][size]=1;
      }
    }
    else {
      cartData[itemId]={};
      cartData[itemId][size]=1;
    }
    setCartItems(cartData);
  }

  const getCartCount = ()=>{
    let count = 0 ;

    for ( const item in cartItems ){
      for ( const size in cartItems[item]){
        try{
          if (cartItems[item][size] > 0){
            count += cartItems[item][size];
          }
        } catch (error){
          // ignore invalid entries
        }
      }
    }

    return count;
  }
  
  const updateCartQuantity = async (itemId, size, quantity) => {
    let cartData = structuredClone(cartItems);
    cartData[itemId][size] = quantity;
    setCartItems(cartData);
  }
 const getCartAmount = () => {
    let totalAmount = 0;
    for (const items in cartItems) {
      let itemInfo = products.find((product) => product._id === items);
      // Check if itemInfo is valid
      if (itemInfo) {
        for (const item in cartItems[items]) {
          if (cartItems[items][item] > 0) {
            totalAmount += cartItems[items][item] * itemInfo.price;
          }
        }
      } else {
        console.log(`Product with id ${items} not found`);
      }
    }
    return totalAmount;
  };

  useEffect(()=> {
    console.log(cartItems);
  }, [cartItems])

  const value = {
    products,
    currency,
    delivery_fee,
    search,
    showSearch,
    setSearch,
    setShowSearch,
    cartItems,
    addToCart,
    getCartCount,
    getCartAmount,
    updateCartQuantity,
    navigate,
  };

  return (
    <ShopContext.Provider value={value}>        
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider ;