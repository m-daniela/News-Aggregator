import React from 'react';
import NewsProvider from '../context/NewsContext';
import Article from './Article';
import Header from './Header';
import NewsList from './NewsList';
import NewsSources from './NewsSources';

const App = () => {
    return (
        <NewsProvider>
            <div className="app">
                <Header/>
                <div className="contents">
                    <NewsSources/>
                    <NewsList/>
                    <Article/>
                </div>
            </div>
        </NewsProvider>
    );
};

export default App;
