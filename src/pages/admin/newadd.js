const NewAdd = {
    render(){
        return /*html*/ `
        <div class="w-full">
    <div class="bg-gradient-to-b from-blue-800 to-blue-600 h-96"></div>
    <div class="max-w-5xl mx-auto px-6 sm:px-6 lg:px-8 mb-12">
        <div class="bg-white w-full shadow rounded p-8 sm:p-12 -mt-72">
            <p class="text-3xl font-bold leading-7 text-center">Thêm bài viết mới</p>
            <form id="form-add-post" class="w-full flex flex-col mt-8">
                            <input type="text" id="tittle" placeholder="tiêu đề bài viết">
                            <input type="text" id="img" placeholder="ảnh bài viết">
                            <input type="text" id="desc" placeholder="nội dung bài viết">
                            <button class="mt-9 font-semibold leading-none text-white py-4 px-10 bg-blue-700 rounded hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none">Thêm mới</button>
            </form>
        </div>
    </div>
</div>
        
        `

    },


    afterrender(){
        const formAdd =document.querySelector("#form-add-post")
        formAdd.addEventListener("submit", function(e){
            e.preventDefault();
            const post = {
                title: document.querySelector('#title').value,
                img: document.querySelector('#img').value,
                desc: document.querySelector('#desc').value
            };

            fetch('http://localhost:3002/post', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(post)
            })
        })
    }
}
export default NewAdd;