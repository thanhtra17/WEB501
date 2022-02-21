
const Header = {
    render() {
        return /*html*/ `
       <div class="w-12/12 grid gap-4 grid-cols-3 h-12 mx-auto mb-3 " >
           <div class=""> 
                <a href="/" class=""><img  src="./img/Untitled-3.jpg" alt="" class="w-40 my-5 ml-3" /></a>
            </div>
           <div class="mx-auto">
                <ul class="flex my-7 gap-3" >
                <li><a href="/" class="font-bold  text-xl block px-2 hover:border-b-2 border-black  ">HOME</a></li>
                    <li><a href="/news" class="font-bold  text-xl block px-2 hover:border-b-2 border-black  ">NEWS</a></li>
                    <li><a href="/products" class="font-bold text-xl block px-2 hover:border-b-2 border-black ">PRODUCTS</a></li>
                </ul>
            </div>
            <div class="mx-auto">
                <ul class="flex my-7 gap-3 " >
                    <li><a href="/cart" class="font-bold text-xl block px-2 hover:border-b-2 border-black ">CART</a></li>
                    <li><a href="/signin" class="font-bold text-xl block px-2 hover:border-b-2 border-black ">SIGN IN</a></li>
                </ul>
            </div>
        </div>
        `
    },
    afterRender() {
        const user = JSON.parse(localStorage.getItem("user")).user.username;
        document.querySelector("#account-email").innerHTML = username;
        Header.afterRender()
    },
};
export default Header;