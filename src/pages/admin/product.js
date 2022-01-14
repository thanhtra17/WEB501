import AdminProductList from "../../components/admin/productlist";

const ProductmanagePage = {
    render() {
        return `<div>
            <h1>Quản lý Tin tức</h1>
            ${AdminProductList.render()}
        </div>`;
    },
};
export default ProductmanagePage;