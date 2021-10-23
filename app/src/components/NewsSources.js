import React, { useState, useEffect, useContext } from 'react';
import { NewsContext } from '../context/NewsContext';
import { actionTypes } from '../reducer/reducer';
import { getArticles, getSources } from '../utils/serverCalls';

const SourceItem = ({source}) => {
    const {dispatch} = useContext(NewsContext);

    const getArticlesHandler = () => {
        dispatch({type: actionTypes.source, payload: source});
        getArticles(source)
            .then(result => dispatch({type: actionTypes.articles, payload: result}))
            .catch(console.log);
    };

    return (
        <span className="source" onClick={getArticlesHandler}>
            {source}
        </span>
    );
};

/**
 * Displays the side bar with the avaialble news sources 
 */
const NewsSources = () => {
    const [sources, setSources] = useState([]);

    useEffect(() => {
        getSources()
            .then(result => setSources(result))
            .catch(console.log);
    }, []);

    return (
        <div className="sources">
            {
                sources.map(source => {
                    return <SourceItem source={source} key={source} />;
                })
            }
        </div>
    );
};

export default NewsSources;
