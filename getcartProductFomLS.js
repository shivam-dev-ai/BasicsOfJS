import { updateCart } from "./arrLocalStorageProduct";

export const getcartProductFromLS =()=> {
    // function body 
    let cartProduct = localStorage.getItem("cartProductLS");
    if(!cartProduct){
        return [];
    }
    cartProduct = JSON.parse(cartProduct);

    updateCart(cartProduct);

    return cartProduct;

}