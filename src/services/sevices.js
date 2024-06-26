import axios from "axios";

const baseURL = "https://evr.bjst.uz/api/";
export default {
    getBannerNews(l) {
        return axios.get(`${baseURL}/corusel/index`, {
            headers: {
                "Accept-language": l
            }
        })
    },
    getLatestNews(l) {
        return axios.get(`${baseURL}/news/last-news`, {
            headers: {
                "Accept-language": l
            }
        })
    },
    getDetail(slug) {
        return axios.post(`${baseURL}/news/news-detail/`, {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            slug: slug,
        })
    },
    getCatigorys() {
        return axios.get(`${baseURL}/category/index`)
    },
    getDetailCategory(id, slug, page, ) {
        return axios.post(`${baseURL}/category/category/?id=${id}&page=${page}`, {
            slug: slug,
        })
    }
};