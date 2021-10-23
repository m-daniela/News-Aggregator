
export const initialState = {
    sources: [],
    source: "", 
    articles: [],
    article: [],
    category: ""
};

export const actionTypes = {
    sources: "GET_SOURCES",
    source: "SELECT_SOURCE",
    articles: "GET_ARTICLES",
    article: "SELECT_ARTICLE",
    category: "SELECT_CATEGORY"
};

const newsReducer = (state, action) => {
    switch (action.type){
    case actionTypes.sources:
        return {...state, sources: action.payload};
    case actionTypes.source:
        return {...state, source: action.payload};
    case actionTypes.articles:
        return {...state, articles: action.payload};
    case actionTypes.article:
        return {...state, article: action.payload};
    case actionTypes.category:
        return {...state, category: action.payload};
    default:
        return state;
    }
};

export default newsReducer;