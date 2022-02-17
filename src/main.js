// import './style.css'
import Navigo from "navigo";
import Header from "./components/header";
import Footer from "./components/footer";
import HomePage from "./pages/homepage";
import Tuyensinh from "./pages/tuyensinh";
import Daotao from "./pages/daotao";
import Detailpage from "./pages/admin/new/detailpage";
// 
import ProductmanagePage from "./pages/admin/product";
// 
import SignUp from "./pages/signup";
import SignIn from "./pages/signin";
// 
                                // import NewAdd from "./pages/admin/newadd";
import dashboard from "./pages/admin/dashboard";
import AdminNewEdit from "./pages/admin/newedit";
import news from "./pages/admin/new";
import AdminNews from "./pages/admin/new";
import AdminNewsAdd from "./pages/admin/new/add";
import AdminEditPost from "./pages/admin/new/edit";



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
    "/tuyensinh": () => {
        print(Tuyensinh);
    },
    // 
    "/daotao": () => {
        print(Daotao);
    },
    // 
    "/news/:id":({data}) => {
        const {id} = data;
        print(Detailpage,id)
    },
    // 
    "/admin/product": () => {
        print(ProductmanagePage);
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
    "/admin/new/edit": () =>{
        print(AdminNewEdit);
    },
    //
    "admin/news/dashboard": () =>{
        print(AdminNews);
    },
    "/admin/new/add": () =>{
        print(AdminNewsAdd);
    },
    "/admin/new/:id/edit": ({ data }) => print(AdminEditPost, data.id),
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