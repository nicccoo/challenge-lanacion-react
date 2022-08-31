import React, { useEffect, useState } from 'react'
import { fetchData } from '../../api/api';
import './styles.css'

const GridItem = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const getArticles = async () => {
            const data = await fetchData();
            setArticles(data);
        }
        getArticles();
    }, [])

    return (
        <>
            {
                articles.map((art) => {
                    return (
                        <div className='griditem-container' key={art._id}>
                            <img className='griditem-image' src={art.promo_items.basic.url} />
                            <h5 className='griditem-title'>{art.headlines.basic}</h5>
                        </div>
                    )
                })
            }
        </>
    )
}

export default GridItem