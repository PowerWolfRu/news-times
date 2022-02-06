import {makeAutoObservable} from "mobx";

export default class ArticleStore {
    constructor() {
        this._articles = [];
        this._categories = [];
        this._creators = [];
        this._selectedCategory = {};
        this._selectedCreator = {};
        this._page = 1;
        this._totalCount = 0;
        this._limit = 3;
        makeAutoObservable(this);
    }

    setArticles(articles){
        this._articles = articles;
    }
    
    setCategories(categories){
        this._categories = categories;
    }
    
    setCreators(creators){
        this._creators = creators;
    }

    setSelectedCategory(category) {
        this.setPage(1);
        this._categories = category;
    }

    setPage(page) {
        this._page = page;
    }
    setTotalCount(count) {
        this._totalCount = count;
    }

    get articles() {
        return this._articles;
    }
    get categories() {
        return this._categories;
    }
    get creators() {
        return this._creators;
    }
    get selectedCategory() {
        return this._selectedCategory;
    }
    get selectedCreator() {
        return this._selectedCreator;
    }

    get totalCount() {
        return this._totalCount
    }
    get page() {
        return this._page
    }
    get limit() {
        return this._limit
    }
}
