import { useReducer } from "react";

const cartItems = [];

const reducerFunc = (state, action) =>{
    switch (action.type) {
        case 'ADD':{
            // console.log("state",state)
            // console.log("payload",action.payload)
            return [...state, {...action.payload}]
        }
        case 'REMOVE':{
            return state.filter((item) => item.id !== action.payload.id)
        }
        case 'RESET':{
            return [];
        }
        default:
            return state;
    }
}
const Cart = () => {


    const [cart, dispatch] = useReducer(reducerFunc, cartItems);

    const handleAdd = (item) => {
        dispatch({type:"ADD", payload:item})
        console.log(cart)
    }
    const handleRemove = (item) => {
        dispatch({type:"REMOVE", payload:item})
    }
    const handleReset = () => {
        dispatch({type:"RESET"})
    }

    const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);
    
    return(
        <div className="container">
            <h2>Shopping Cart</h2>
            <ul>
                {cart.map((item) => {
                    return (
                        <li key={item.id}>
                            <span>{item.name} - ${item.price}</span>
                            <span> Quantity: {item.quantity} </span>
                        <button onClick={() => handleRemove(item)}>Remove</button>
                        </li>
                    )
                })}
            </ul>
            <h3>Total Price: ${totalPrice}</h3>
            <div style={{display:'flex', flexDirection:"column", gap:"5px", width:"10%"}}>
                <button onClick={() => handleAdd({id:Date.now(),name:"New item", price:10, quantity:1})} >Add item</button>
                <button onClick={handleReset}>Clear cart</button>
            </div>
        </div>
    )
}

export default Cart;