import {banner3} from "../components/banner";
import { News3 } from "../components/new";
// import {banner2} from "../components/banner2";
const Daotao = {
    render() {
        return `
        <div class="banner" >
        ${banner3.render()};
        </div>

        <div class="new" >
        ${News3.render()};
        </div>
        `;
    },
};
export default Daotao;
