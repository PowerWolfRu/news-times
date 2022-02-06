import axios from 'axios';

export default class PostService {

    static async getAllArticles() {
        const response = await axios.get('https://localhost:5001/articles/get')
        return response;
    }

    static async getAllCategories(){
        const response = axios.get('https://localhost:5001/categories/get')
        return response;
    }

    static async getAllAuthors(){
        const response = axios.get('https://localhost:5001/creators/get')
        return response;
    }
}