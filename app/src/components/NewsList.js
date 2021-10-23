import React, { useContext } from 'react';
import { NewsContext } from '../context/NewsContext';
import { actionTypes } from '../reducer/reducer';
import { dummyNews } from '../utils/constants';
import { getArticle } from '../utils/serverCalls';

/**
 * Displays the news item information: title, link, date,
 * intro paragraph
 * @param source: the news object
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
            <a>{link}</a>
            <span>{date}</span>
            <p>{intro}</p>
        </div>
    );
};

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
