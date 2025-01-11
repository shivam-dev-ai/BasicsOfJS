const cartValue = document.querySelector("#cartValue");

export const updateCart = (cartProduct )=>{
    return (cartValue.innerHTML = `<i class="fa-solid fa-cart-shopping"> ${cartProduct.length} </i>` ) 
}