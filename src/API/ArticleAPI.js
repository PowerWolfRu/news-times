import {$host, $authHost} from "./index";

export const getArticles = async (categoryId, creatorId, page, limit) => {
    const {data} = await $host.get('/articles/get', {params : {
            categoryId, creatorId, limit, page
        }
    });

    return data;
}

export const createArticle = async (article) => {
    const {data} = await $host.post('articles/create', article);
    return data;
}

export const getCategories = async () => {
    const {data} = await $host.get('/categories/get');

    return data;
}

export const createCategories = async (category) => {
    const {data} = await $host.post('categories/create', category)
    return data;
}

export const getCreators = async () => {
    const {data} = await $host.get('creators/get');

    return data;
}