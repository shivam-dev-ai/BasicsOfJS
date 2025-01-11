import { updateCart } from "./arrLocalStorageProduct";
import { getcartProductFromLS } from "./getcartProductFomLS";

getcartProductFromLS();

export  const addToCart = ((event,id, stock) =>{
    let arrLocalStorageProduct = getcartProductFromLS();

    const currentCartElement = document.querySelector(`#cart${id}`);
    
    let quantityButton = currentCartElement.querySelector(".element").innerText;
    let price = currentCartElement.querySelector(".productPrice").innerText;

    // console.log( quantityButton,price );

let existingProd = arrLocalStorageProduct.find((curProd) => curProd.id === id);
console.log;(existingProd);


    localStorage.setItem("cartProductLS",JSON.stringify(updatedCart));


if(existingProd){
     alert("Product already in cart");
    return false;
}


    price = Number(price*quantityButton)
    quantityButton= Number(quantityButton);

    arrLocalStorageProduct.push({id,quantityButton,price});
    localStorage.setItem("cartProductLS",JSON.stringify(arrLocalStorageProduct));

    updateCart(arrLocalStorageProduct);

});