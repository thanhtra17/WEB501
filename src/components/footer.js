const Footer = {
    render(){
        return /*html*/`
        <div class="bg-slate-700 py-4 text-center my-2 grid gap-4 grid-cols-3" >
            <div class="text-white">
                <h2 class="text-2xl font-bold">Về chúng tôi </h2>
                <p>Our Story</p>
                <p>Store location</p>
            </div>
            <div class="text-white">
                <h2 class="text-2xl font-bold">Dịch vụ khách hàng </h2>
                <p>Thanh toán & vận chuyển</p>
                <p>Bảo hành & đổi trả</p>
                <p>Bảo mật thông tin</p>
            </div>
            <div> 
            <a href="http://online.gov.vn/Home/WebDetails/70262"><img src="./img/logoSaleNoti.png" class="w-40 my-2 mx-auto" alt="" /></a>
            </div>
        </div>
        `
    },
};
export default Footer;