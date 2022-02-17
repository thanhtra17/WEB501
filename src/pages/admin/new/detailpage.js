import { get, getAll } from "../../../api/post";

const DetailPage = {
  async render(id) {
    const { data } = await getAll();
    const dataDetail = data.find((e)=>e.id==id)
    return `
            <div>Detail Page</div>
            <h1>${dataDetail.title}</h1>
            <img src="${dataDetail.img}" />
            <p>${dataDetail.desc}</p>
        `;
  },
};
export default DetailPage;