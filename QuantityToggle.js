export const  homeQuantityToggle = (event,id,stock)=>{
    const currentEventElement = document.querySelector(`#cart${id}`);
    // console.log(currentEventElement);

    const productQuantity = currentEventElement.querySelector(".element");
    // console.log(productQuantity);
    let quantity = parseInt(productQuantity.getAttribute("data-quantity")) ||  1;

    if(event.target.className === "cartIncrement"){
if(quantity < stock){
    quantity += 1;
    }else if( quantity == stock){
        quantity = stock;
    }
}
if(event.target.className == "cartDecrement"){
    if(quantity > 1){
        quantity -= 1;
    }else if(quantity == 1){
        quantity = 1;
    }
}

productQuantity.textContent = quantity;
productQuantity.setAttribute("data-quantity",quantity);
return quantity;

};