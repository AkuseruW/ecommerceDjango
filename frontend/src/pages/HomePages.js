import React from 'react'
import Carousel from '../components/Carousel_Home';
import '../styles/home/articles_card.scss'
import articles from '../articles'

function HomePages() {
    return (
        <>
            <Carousel />
            <main>
                <div className="container">
                    <h3>Last </h3>
                    <div className="container_articles">
                        {articles.map(article => (
                            <div className="article_content">
                                <div key={article.id} className="card">
                                    <img src={article.image} alt="" className="card-image" />
                                    <div className="card-content">
                                        <h3 className="card-title">{article.name}</h3>
                                        <p className="card-description">{article.description}</p>
                                        <div className="card-price-review">
                                            <p className="card-price">{article.price} &euro;</p>
                                            <div className="card-review">
                                                <p>{article.reviews.average_rating}</p>
                                                <span>({article.reviews.number_of_reviews} reviews)</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </>
    )
}

export default HomePages