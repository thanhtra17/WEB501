import data from "../data";
import {data2} from "../data";
import {data3} from "../data";
const News = {
    render(){
        return /*html*/ `
        <h2 class="font-semibold text-blue-900 my-4 uppercase text-2xl">Tin tức học tập</h2>
        <div class="grid grid-cols-3 gap-8">
            ${data.map((post) => `
            <div class="border p-3">
                <a href=""><img src="${post.img}" alt="" /></a>
                <h3 class="my-3"><a href="" class="font-semibold text-orange-500 text-lg">${post.title}</a></h3>
                <p>${post.desc}</p>
            </div>
            `).join("")}
            
        </div>
        
        <h2 class="font-semibold text-blue-900 my-4 uppercase text-2xl">Hoạt động sinh viên</h2>
        <div class="grid grid-cols-3 gap-8">
            ${data.map((post) => `
            <div class="border p-3">
                <a href=""><img src="${post.img}" alt="" /></a>
                <h3 class="my-3"><a href="" class="font-semibold text-orange-500 text-lg">${post.title}</a></h3>
                <p>${post.desc}</p>
            </div>
            `).join("")}
            
        </div>
        `;
    }
}
export default News;


export const News2 = {
    render(){
        return /*html*/ `
        <h2 class="font-semibold text-blue-900 my-4 uppercase text-2xl">Tin tức tuyển sinh</h2>
        <div class="grid grid-cols-3 gap-8">
            ${data2.map((post) => `
            <div class="border p-3">
                <a href=""><img src="${post.img}" alt="" /></a>
                <h3 class="my-3"><a href="" class="font-semibold text-orange-500 text-lg">${post.title}</a></h3>
                <p>${post.desc}</p>
            </div>
            `).join("")}
            
        </div>
        
        <h2 class="font-semibold text-blue-900 my-4 uppercase text-2xl">Hoạt động tuyển sinh</h2>
        <div class="grid grid-cols-3 gap-8">
            ${data2.map((post) => `
            <div class="border p-3">
                <a href=""><img src="${post.img}" alt="" /></a>
                <h3 class="my-3"><a href="" class="font-semibold text-orange-500 text-lg">${post.title}</a></h3>
                <p>${post.desc}</p>
            </div>
            `).join("")}
            
        </div>
        `;
    }
}


export const News3 = {
    render(){
        return /*html*/ `
        <h2 class="font-semibold text-blue-900 my-4 uppercase text-2xl">Tin tức đào tạo</h2>
        <div class="grid grid-cols-3 gap-8">
            ${data3.map((post) => `
            <div class="border p-3">
                <a href=""><img src="${post.img}" alt="" /></a>
                <h3 class="my-3"><a href="" class="font-semibold text-orange-500 text-lg">${post.title}</a></h3>
                <p>${post.desc}</p>
            </div>
            `).join("")}
            
        </div>
        
        <h2 class="font-semibold text-blue-900 my-4 uppercase text-2xl">Hoạt động đào tạo</h2>
        <div class="grid grid-cols-3 gap-8">
            ${data3.map((post) => `
            <div class="border p-3">
                <a href=""><img src="${post.img}" alt="" /></a>
                <h3 class="my-3"><a href="" class="font-semibold text-orange-500 text-lg">${post.title}</a></h3>
                <p>${post.desc}</p>
            </div>
            `).join("")}
            
        </div>
        `;
    }
}
 
 