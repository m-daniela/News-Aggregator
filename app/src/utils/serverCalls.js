
import axios from "axios";
import { baseUrl, getArticlesUrl, getArticleUrl, getByCategoryUrl } from "./constants";

export const getSources = async () =>{
    return axios.get(baseUrl)
        .then((result) => {
            return result.data;
        }).catch((err) => {
            console.log(err);
            return [];
        });
};

export const getArticles = async (source) => {
    return axios.get(getArticlesUrl(source))
        .then((result) => {
            return result.data;
        }).catch((err) => {
            console.log(err);
            return [];
        });
};

export const getArticlesByCategory = async (source, category) => {
    return axios.get(getByCategoryUrl(source, category))
        .then((result) => {
            return result.data;
        }).catch((err) => {
            console.log(err);
            return [];
        });
};

export const getArticle = async (source, url) => {
    console.log(url);
    return axios.post(getArticleUrl(source), {articleUrl: url})
        .then((result) => {
            return result.data;
        }).catch((err) => {
            console.log(err);
            return {};
        });
};