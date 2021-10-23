import React, { useContext } from 'react';
import { NewsContext } from '../../context/NewsContext';
import { actionTypes } from '../../reducer/reducer';
import { getArticle } from '../../utils/serverCalls';

/**
 * Displays the news item information: title, link, date,
 * intro paragraph
 * @param {Object} article: the news object
 */
const NewsItem = ({article}) => {
    const {title, link, date, intro} = article;
    const {news, dispatch} = useContext(NewsContext);

    const getArticleHandler = () => {
        getArticle(news.source, link)
            .then(result => dispatch({type: actionTypes.article, payload: result}))
            .catch(console.log);
    };
    
    return (
        <div className="news-item" key={title} onClick={getArticleHandler}>
            <h2>{title}</h2>
            <div className="meta">
                <a href={link} target="_blank" rel="noreferrer">Source</a>
                <span>{date}</span>
            </div>
            
            <p>{intro}</p>
        </div>
    );
};

export default NewsItem;