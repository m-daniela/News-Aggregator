import React, { useContext } from 'react';
import { NewsContext } from '../../context/NewsContext';
import NewsItem from './NewsItem';

/**
 * Shows the news list
 */
const NewsList = () => {
    const {news} = useContext(NewsContext);
    return (
        <div className="news">
            {
                news.articles.map(article => <NewsItem key={article.title} article={article}/>)
            }
        </div>
    );
};

export default NewsList;
