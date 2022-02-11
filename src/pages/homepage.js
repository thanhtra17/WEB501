import banner1 from "../components/banner";
import News from "../components/new";

const HomePage = {
   async render() {
        return /*html*/ `
       <div class="banner" >
        ${banner1.render()};
        </div>


        <div class="new" >
        ${await News.render()};
        </div>
       
              <!-- <section class="my-3">
              <a href="">
                  <img src="./img/sb_1606994772_674.jpg" alt="">
              </a>
          </section>
          <section>
              <h2 class="font-bold ml-10 text-xl">TIN TỨC HỌC TẬP</h2>
              <div class="grid grid-cols-3 gap-4">
                  <article class="border border-indigo-600">
                      <div class="">
                              <img src="./img/article_1608014327_926.jpg" alt="" class="w-11/12 h-64 my-2 mx-auto"/>  
                      </div>
                      <div class="text-center">
                          <h3 class="my-1 text-orange-600 lg">Vinh danh 295 sinh viên FPT Polytechnic học kì Spring 2021</h3>
                          <p class="my-2 text-sm">Cao đẳng FPT Polytechnic Hà Nội đã tổ chức lễ tôn vinh ong vàng Poly tuyên dương 295 cá nhân và tổ chức xuất sắc trong học tập và hoạt động</p>
                      </div>
                  </article>
                  <article class="border border-indigo-600">
                      <div class="">
                          <img src="./img/article_1608014327_926.jpg" alt="" class="w-11/12 h-64 my-2 mx-auto">      
                  </div>
                      <div class="text-center">
                          <h3 class="my-1 text-orange-600 lg">Vinh danh 295 sinh viên FPT Polytechnic học kì Spring 2021</h3>
                          <p class="my-2 text-sm">Cao đẳng FPT Polytechnic Hà Nội đã tổ chức lễ tôn vinh ong vàng Poly tuyên dương 295 cá nhân và tổ chức xuất sắc trong học tập và hoạt động</p>
                      </div>
                  </article>
                  <article class="border border-indigo-600 lg">
                      <div class="my-2">
                          <img src="./img/article_1608014327_926.jpg" alt="" class="w-11/12 h-64 my-2 mx-auto">      
                  </div>
                      <div class="text-center">
                          <h3 class="my-1 text-orange-600">Vinh danh 295 sinh viên FPT Polytechnic học kì Spring 2021</h3>
                          <p class="my-2 text-sm">Cao đẳng FPT Polytechnic Hà Nội đã tổ chức lễ tôn vinh ong vàng Poly tuyên dương 295 cá nhân và tổ chức xuất sắc trong học tập và hoạt động</p>
                      </div>
                  </article>
              </div>
          </section>
          <section>
              <h2 class="font-bold ml-10 text-xl my-3">HOẠT ĐỘNG SINH VIÊN</h2>
              <div class="grid grid-cols-3 gap-4">
                  <article class="border border-indigo-600">
                      <div class="">
                              <img src="./img/article_1608014327_926.jpg" alt="" class="w-11/12 h-64 my-2 mx-auto">      
                      </div>
                      <div class="text-center">
                          <h3 class="my-1 text-orange-600 lg">Vinh danh 295 sinh viên FPT Polytechnic học kì Spring 2021</h3>
                          <p class="my-2 text-sm">Cao đẳng FPT Polytechnic Hà Nội đã tổ chức lễ tôn vinh ong vàng Poly tuyên dương 295 cá nhân và tổ chức xuất sắc trong học tập và hoạt động</p>
                      </div>
                  </article>
                  <article class="border border-indigo-600">
                      <div class="">
                          <img src="./img/article_1608014327_926.jpg" alt="" class="w-11/12 h-64 my-2 mx-auto">      
                  </div>
                      <div class="text-center">
                          <h3 class="my-1 text-orange-600 lg">Vinh danh 295 sinh viên FPT Polytechnic học kì Spring 2021</h3>
                          <p class="my-2 text-sm">Cao đẳng FPT Polytechnic Hà Nội đã tổ chức lễ tôn vinh ong vàng Poly tuyên dương 295 cá nhân và tổ chức xuất sắc trong học tập và hoạt động</p>
                      </div>
                  </article>
                  <article class="border border-indigo-600 lg">
                      <div class="my-2">
                          <img src="./img/article_1608014327_926.jpg" alt="" class="w-11/12 h-64 my-2 mx-auto">      
                  </div>
                      <div class="text-center">
                          <h3 class="my-1 text-orange-600">Vinh danh 295 sinh viên FPT Polytechnic học kì Spring 2021</h3>
                          <p class="my-2 text-sm">Cao đẳng FPT Polytechnic Hà Nội đã tổ chức lễ tôn vinh ong vàng Poly tuyên dương 295 cá nhân và tổ chức xuất sắc trong học tập và hoạt động</p>
                      </div>
                  </article>
              </div>
          </section> -->
          `;
    },
};
export default HomePage;
