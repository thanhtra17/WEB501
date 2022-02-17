const Header = {
    render() {
        return /*html*/ `
       <div class="bg-red-800 text-white ">
           <div class="">
            <ul class="flex">
                <li><a href="/" class="block px-4 py-5 hover:bg-indigo-500 hover:text-white">Trang chủ</a></li>
                <li><a href="/tuyensinh" class="block px-4 py-5 hover:bg-indigo-500 hover:text-white">Tuyển sinh</a></li>
                <li><a href="/daotao" class="block px-4 py-5 hover:bg-indigo-500 hover:text-white">Đào tạo</a></li>
                <li><a href="admin/news/dashboard" class="block px-4 py-5 hover:bg-indigo-500 hover:text-white">Quản lí bài viết</a></li>
                <li><a href="/admin/new/add" class="block px-4 py-5 hover:bg-indigo-500 hover:text-white">Thêm bài viết</a></li>
                <li><a href="/signup" class="block px-4 py-5 hover:bg-indigo-500 hover:text-white">SignUp</a></li>
                <li><a href="/signin" class="block px-4 py-5 hover:bg-indigo-500 hover:text-white">SignIn</a></li>
            </ul>
            <span id="account-email" class="block px-4 py-5 text-white">username  </span>
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