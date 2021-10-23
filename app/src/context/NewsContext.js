import React, { createContext, useReducer } from 'react';
import newsReducer, { initialState } from '../reducer/reducer';

export const NewsContext = createContext();

const NewsProvider = ({children}) => {
    const [news, dispatch] = useReducer(newsReducer, initialState);
    return (
        <NewsContext.Provider value={{news, dispatch}}>
            {children}
        </NewsContext.Provider>
    );
};

export default NewsProvider;
