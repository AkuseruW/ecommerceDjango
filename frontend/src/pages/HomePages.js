import React from 'react'
import Carousel from '../components/Carousel_Home';
import '../styles/home/articles_card.scss'
import '../styles/home/categories_section.scss'
import articles from '../articles'


function HomePages() {

    return (
        <>
            <Carousel />
            <main>
                <div className="rezise_container_articles">
                    <h2>Last Added</h2>
                    <div className="container_articles">
                        {articles.map(article => (
                            <div key={article.id} className="article_content">
                                <div className="card">
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

                <div className="container">
                    <div className='categories'>
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                </div>
            </main>
        </>
    )
}

export default HomePages
