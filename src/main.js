// import './style.css'
import Navigo from "navigo";
import Header from "./components/header";
import Footer from "./components/footer";
import HomePage from "./pages/homepage";
import Detailpage from "./pages/admin/new/detailpage";
// 
import SignUp from "./pages/signup";
import SignIn from "./pages/signin";
// 
                                // import NewAdd from "./pages/admin/newadd";
import dashboard from "./pages/admin/dashboard";
import news from "./pages/admin/new";
import News from "./components/new";
import AdminNews from "./pages/admin/new";
import AdminNewsAdd from "./pages/admin/new/add";
import AdminEditPost from "./pages/admin/new/edit";
// 
import ProductsPage from "./components/product";
import ProductmanagePage from "./pages/admin/product/index.js"
import AdminProductsAdd from "./pages/admin/product/add";
import AdminEditProduct from "./pages/admin/product/edit";
import DetailProduct from "./pages/admin/product/detailproduct";
// 
import CartPage from "./pages/cart";
 


const router = new Navigo("/", { linksSelector: "a" });

const print = async (content, id="") => {
    document.querySelector("#header").innerHTML = Header.render();
    document.querySelector("#app").innerHTML = await content.render(id);
    if(content.afterRender) await content.afterRender(id);
    document.querySelector("#footer").innerHTML = Footer.render();
};

router.on({
    "/": () => {
        print(HomePage);
    },
    // 
    "/news/:id":({data}) => {
        const {id} = data;
        print(Detailpage,id)
    },
    // 
    "/signup": () => {
        print(SignUp);
    },
    // 
    "/signin": () => {
        print(SignIn);
    },
    // 
                            // "/newadd": () =>{
                            //     print(NewAdd);
                            // },
    // 
    "/dashboard": () =>{
        print(dashboard);
    },
    //
    "/news":() =>{
        print(News)
    },
    // 
    "/admin/news": () =>{
        print(AdminNews);
    },
    // 
    "/admin/new/add": () =>{
        print(AdminNewsAdd);
    },
    // 
    "/admin/new/:id/edit": ({ data }) => print(AdminEditPost, data.id),
    // 
    "/products": () =>{
        print(ProductsPage);
    },
    // 
    "/admin/products": () =>{
        print(ProductmanagePage);
    },
    // 
    "/admin/products/add": () =>{
        print(AdminProductsAdd);
    },
    "/admin/product/:id/edit": ({ data }) => print(AdminEditProduct, data.id),
    // 
    "/product/:id":({data}) => {
        const {id} = data;
        print(DetailProduct,id)
    },
    // 
    "/cart": () =>{
        print(CartPage);
    },
});

router.resolve();



// const api = "https://5e79b4b817314d00161333da.mockapi.io/posts";
// fetch (api)
// .then(response => response.json())
// .then(data => console.log(data))


// const getProduct = () => NewPromise((resolve, reject) => {
//     setTimeout(() =>{
//             try {
//                 resolve([1,2,3,4])
//             } catch (error) {
//                 reject("kết nối không thành công")
//             }
//     },3000)
// });


// const showproduct