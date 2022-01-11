// import './style.css'
import Navigo from "navigo";
import Header from "./components/header";
import Footer from "./components/footer";
import HomePage from "./pages/homepage";
import Tuyensinh from "./pages/tuyensinh";
import Daotao from "./pages/daotao";
import Detailpage from "./pages/detailpage";
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
    "/tuyensinh": () => {
        print(Tuyensinh.render());
    },
    "/daotao": () => {
        print(Daotao.render());
    },
    "/detail/:id":({data}) => {
        const {id} = data;
        print(Detailpage.render(+id))
    },
});

router.resolve();
