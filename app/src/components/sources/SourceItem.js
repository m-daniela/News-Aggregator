import React, { useContext } from 'react';
import { NewsContext } from '../../context/NewsContext';
import { actionTypes } from '../../reducer/reducer';
import { getArticles} from '../../utils/serverCalls';

/**
 * Displays the news source
 * On click, the trending/ latest articles are displayed.
 * @param {string} source: news source 
 */
const SourceItem = ({source}) => {
    const {news, dispatch} = useContext(NewsContext);

    // select the source and get the articles from it
    const getArticlesHandler = () => {
        dispatch({type: actionTypes.source, payload: source});
        getArticles(source)
            .then(result => dispatch({type: actionTypes.articles, payload: result}))
            .catch(console.log);
    };

    return (
        <span className={`source ${source === news.source ? "selected" : ""}`} onClick={getArticlesHandler}>
            {source}
        </span>
    );
};


export default SourceItem;