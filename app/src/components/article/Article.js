import React, { useContext } from 'react';
import { NewsContext } from '../../context/NewsContext';
import ReactHtmlParser from "html-react-parser";

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
            <div>{ReactHtmlParser(article ?? "")}</div>
        </div>
    );
};

export default Article;
