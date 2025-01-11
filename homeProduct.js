import { homeQuantityToggle } from "./QuantityToggle.js";
import { addToCart } from "./addToCart.js";
const productContainer = document.querySelector('#productContainer');
const productTemplate = document.querySelector('#productTemplate');


export const showProductconatiner = (products) => {
    if(! products){
        return false;
    }

    products.forEach((curElem) => {
        const { category, description, name, price, image, stock,id } = curElem;


        const productClone = document.importNode(productTemplate.content, true);


        productClone.querySelector("#cartValue").setAttribute("id",`cart${id}`);
        productClone.querySelector('.Productname').textContent = name;
        productClone.querySelector('.productImage').src =  image;
        productClone.querySelector('.productstock').textContent = stock;
        productClone.querySelector('.productPrice').textContent = `$${price}`;
        productClone.querySelector('.productDescription').textContent = description;
        productClone.querySelector('.category').textContent =  category;
        productClone.querySelector('.ProductactualPrice').textContent =  `Actual price ${price *4}`;

        productClone.querySelector(".stockElement").addEventListener('click',(event) => {
            homeQuantityToggle(event,id,stock);
        });

        productClone.querySelector(".add_to_cart").addEventListener('click',(event) => {
            addToCart(event,id,stock);
        });

        productContainer.append(productClone);
    });
    
};