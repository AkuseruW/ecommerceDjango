import React from 'react'
import { Link } from "react-router-dom";
import { HiOutlineHeart } from "react-icons/hi2";
import '../../styles/home/articles_card.scss'


function Article({ article }) {
    return (
        <>
            <HiOutlineHeart className='icon' size={20} style={{ position: 'absolute', top: '58px', right: '5px', color: 'white' }} />
            <Link to={`article/${article.slug}`}>
                <div className="card">
                    <img src={article.image} alt={article.name} className="card-image" />
                    <div className="card-content">
                        <h3 className="card-title">{article.name}</h3>
                        <p className="card-price">{article.price} &euro;</p>
                    </div>
                </div>
            </Link>
        </>
    );
}

export default Article
