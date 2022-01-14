const NewAdd = {
    render(){
        return /*html*/ `
        <div class="w-full">
    <div class="bg-gradient-to-b from-blue-800 to-blue-600 h-96"></div>
    <div class="max-w-5xl mx-auto px-6 sm:px-6 lg:px-8 mb-12">
        <div class="bg-white w-full shadow rounded p-8 sm:p-12 -mt-72">
            <p class="text-3xl font-bold leading-7 text-center">Thêm bài viết mới</p>
            <form action="" method="post">
                <div>
                    <div class="w-full flex flex-col mt-8">
                        <!-- <label class="font-semibold leading-none">Message</label> -->
                        <textarea type="text" class="h-40 text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200"></textarea>
                    </div>
                </div>
                <div class="flex items-center justify-center w-full">
                    <button class="mt-9 font-semibold leading-none text-white py-4 px-10 bg-blue-700 rounded hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none">
                        Thêm mới
                    </button>
                </div>
            </form>
        </div>
    </div>
</div>
        
        `

    }
}
export default NewAdd;