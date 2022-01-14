const Header = {
    render() {
        return /*html*/ `
       <div class="bg-orange-500 ">
           <div class="">
                <ul class="flex">
                <li><a href="/" class="block px-4 py-5 hover:bg-indigo-500 hover:text-white">Trang chủ</a></li>
                <li><a href="/tuyensinh" class="block px-4 py-5 hover:bg-indigo-500 hover:text-white">Tuyển sinh</a></li>
                <li><a href="/daotao" class="block px-4 py-5 hover:bg-indigo-500 hover:text-white">Đào tạo</a></li>
                <li><a href="/admin/product" class="block px-4 py-5 hover:bg-indigo-500 hover:text-white">Quản lí bài viết</a></li>
                <li><a href="/newadd" class="block px-4 py-5 hover:bg-indigo-500 hover:text-white">Thêm bài viết</a></li>
                <li><a href="/signup" class="block px-4 py-5 hover:bg-indigo-500 hover:text-white">SIGN UP</a></li>
                <li><a href="/signin" class="block px-4 py-5 hover:bg-indigo-500 hover:text-white">SIGN IN</a></li>
                
                </ul>
            </div>

        </div>
        `
    },
};
export default Header;