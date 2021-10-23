import React, { useState, useEffect } from 'react';
import { getSources } from '../../utils/serverCalls';
import SourceItem from './SourceItem';

/**
 * Displays the side bar with the avalable news sources 
 * On first run, it will get the sources from the server
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
