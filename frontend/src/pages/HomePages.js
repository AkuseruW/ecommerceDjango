import React, { useEffect } from 'react'
import CarouselHeader from '../components/home/Carousel_Home';
import Article from '../components/home/Articles';
import Categories from '../components/home/Categories'

import { useDispatch, useSelector } from 'react-redux';
import { listArticles } from '../actions/articleAction';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import '../styles/home/newsletter_bar.scss'
import '../styles/home/promo_time.scss'

function HomePages() {
    const dispatch = useDispatch()
    const articleList = useSelector(state => state.articleList)
    const { error, loading, articles } = articleList
    useEffect(() => {
        dispatch(listArticles())
    }, [dispatch])

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };

    return (
        <>
            <CarouselHeader />
            <main>
                <div className="container">
                    <div className="rezise_container_articles">
                        <div className="container_articles ">
                            <h2>Last Added</h2>
                            {loading ? (
                                <h2>Loading ...</h2>
                            ) : error ? (
                                <h3>{error}</h3>
                            ) : (
                                <Carousel responsive={responsive} showDots={true}>
                                    {articles.map((article) => (
                                        <div className="article_content" key={article._id}>
                                            <Article article={article} />
                                        </div>
                                    ))}
                                </Carousel>
                            )}
                        </div>
                    </div>

                    <div className="promo-time">
                        <div>
                            <h3>Big winter promotion </h3>
                        </div>
                    </div>

                    <Categories/>

                    <div className="newsletter">
                        <div>
                            <input type="text" placeholder='Newsletter' />
                            <input type="submit" value="Subscription" />
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default HomePages
