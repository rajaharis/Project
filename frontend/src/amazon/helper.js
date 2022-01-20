import { json } from "body-parser";
import { array } from "joi";

export const updateCart = (product, Qty, type) => {
    console.log(Qty, type);
    let saveProduct = localStorage.getItem('cart');
    saveProduct = saveProduct ? JSON.parse(saveProduct) : [];

    if (type == "add") {
        let isProductFound = false
        saveProduct.forEach(prod => {
            if (prod.id == product.id) {

                prod.quantity = Qty
                isProductFound = true

                return
            }
        })
        if (!isProductFound) {
            saveProduct.push(product);
            product.quantity = Qty;
        }

        localStorage.setItem('cart', JSON.stringify(saveProduct))
    }
}

export const getCart = () => {
    let saveProduct = localStorage.getItem('cart');
    saveProduct = saveProduct ? JSON.parse(saveProduct) : [];
    return saveProduct;

}
export const removeItem = (id) => {
    let saveProduct = localStorage.getItem('cart');
    saveProduct = saveProduct ? JSON.parse(saveProduct) : [];
    saveProduct.forEach((prod, index) => {
        if (prod.id == id) {
            console.log("id match", prod.id);
            console.log("index of item==>", index);
            saveProduct.splice(index, 1);
        }

    })

    localStorage.setItem("cart", JSON.stringify(saveProduct))
    window.location.reload()

}
export const clearCart = () => {
    localStorage.removeItem('cart');
    setTimeout(window.location.reload(), 3000)


}
