let cart = [];
if(localStorage.getItem('cart')){
    cart = JSON.parse(localStorage.getItem('cart'))
};

export const addTocart = (newProduct) => {
    console.log('newProduct', newProduct);
    const existProduct = cart.find(item => item.id === newProduct.id);

    if(!existProduct){
        cart.push(newProduct)
    } else {
        existProduct.quantity += newProduct.quantity
    }

    localStorage.setItem('cart', JSON.stringify(cart))
}
export const removeItemInCart = (id, next) => {
    const confirm = window.confirm("Bạn có chắc chắn muốn xóa không?");
    if(confirm){
        cart = cart.filter(item => item.id !== id);
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    next();
}