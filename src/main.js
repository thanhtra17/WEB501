// import './style.css'
import Navigo from "navigo";
import Header from "./components/header";
import Footer from "./components/footer";
import HomePage from "./pages/homepage";
import Tuyensinh from "./pages/tuyensinh";
import Daotao from "./pages/daotao";
import Detailpage from "./pages/detailpage";
// 
import AdminProductEdit from "./pages/admin/productedit";
import ProductmanagePage from "./pages/admin/product";
// 
import SignUp from "./pages/signup";
import SignIn from "./pages/signin";
// 
import NewAdd from "./pages/admin/newadd";
import dashboard from "./pages/admin/dashboard";
import AdminNewEdit from "./pages/admin/newedit";
import news from "./pages/admin/new";


const router = new Navigo("/", { linksSelector: "a" });

const print = (content) => {
    document.querySelector("#header").innerHTML = Header.render();
    document.querySelector("#app").innerHTML = content;
    document.querySelector("#footer").innerHTML = Footer.render();
};

router.on({
    "/": () => {
        print(HomePage.render());
    },
    // 
    "/tuyensinh": () => {
        print(Tuyensinh.render());
    },
    // 
    "/daotao": () => {
        print(Daotao.render());
    },
    // 
    "/new/:id":({data}) => {
        const {id} = data;
        print(Detailpage.render(+id))
    },
    // 
    "/admin/product/:id/edit": ({ data }) => {
        const { id } = data;
        print(AdminProductEdit.render(id));
    },
    // 
    "/admin/product": () => {
        print(ProductmanagePage.render());
    },
    // 
    "/signup": () => {
        print(SignUp.render());
    },
    // 
    "/signin": () => {
        print(SignIn.render());
    },
    // 
    "/newadd": () =>{
        print(NewAdd.render());
    },
    // 
    "/dashboard": () =>{
        print(dashboard.render());
    },
    // 
    "/admin/new/edit": () =>{
        print(AdminNewEdit.render());
    },
    //
    "/news": () =>{
        print(news.render());
    },
    
});

router.resolve();
