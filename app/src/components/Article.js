import React, { useContext } from 'react';
import { NewsContext } from '../context/NewsContext';

/**
 * Displays the selected article
 */
const Article = () => {
    const {news} = useContext(NewsContext);
    const {title, date, article} = news.article;
    return (
        <div className="article">
            <h1>{title}</h1>
            <span>{date}</span>
            <div>{article}</div>
        </div>
    );
};

export default Article;
