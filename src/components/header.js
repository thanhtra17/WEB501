const Header = {
    render() {
        return /*html*/ `
       <div class="bg-orange-500">
            <ul class="flex">
            <li><a href="/" class="block px-4 py-5 hover:bg-indigo-500 hover:text-white">Trang chủ</a></li>
            <li><a href="/tuyensinh" class="block px-4 py-5 hover:bg-indigo-500 hover:text-white">Tuyển sinh</a></li>
            <li><a href="/daotao" class="block px-4 py-5 hover:bg-indigo-500 hover:text-white">Đào tạo</a></li>
            </ul>
        </div>
        `
    },
};
export default Header;