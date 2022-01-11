import { banner2 } from "../components/banner";
import { News2 } from "../components/new";
const Tuyensinh = {
    render() {
        return `
        <div>
        ${banner2.render()};
        </div>


        <div class="new" >
        ${News2.render()};
        </div>
        
        `;
    },
};
export default Tuyensinh;
