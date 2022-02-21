import { getAll } from "../api/product";

const ProductsPage = {
  async render() {
    const { data } = await getAll();
    return /*html*/ ` 
    <div class="w-10/12 mx-auto"> 
            <h2 class="font-semibold text-blue-900 my-4 uppercase text-4xl">Sản phẩm</h2>
            <div class="grid grid-cols-4 gap-5">
                ${data
                  .map(
                    (post) => `
                        <div class="border p-3">
                            <a href="/product/${post.id}"><img src="${post.img}" alt="" /></a>
                            <h3 class="my-3"><a href="/#/product/${post.id}" class="font-semibold text-orange-500 text-lg">${post.title}</a></h3>
                            <p class="text-xl font-semibold">${post.price}đ</p>
                            <div class="text-center">
                            </div>
                        </div>
                        `
                  )
                  .join("")}
            </div>
     </div>        
        `

                    

  },
};
export default ProductsPage;