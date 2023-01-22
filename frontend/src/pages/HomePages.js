import React, {useState, useEffect} from 'react'
import CarouselHeader from '../components/home/Carousel_Home';
import { Link } from "react-router-dom";
import '../styles/home/articles_card.scss'
import '../styles/home/categories_section.scss'
import '../styles/home/newsletter_bar.scss'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Article from '../components/home/Articles';
import axios from 'axios'
import '../styles/home/promo_time.scss'

function HomePages() {
    const [articles, setArticles] = useState([])

    useEffect(()=>{

        async function fetctArticles() {
            const {data} = await axios.get('/api/articles/')
            setArticles(data)
        }

        fetctArticles()
        
    },[])

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
                            <Carousel responsive={responsive} showDots={true}>
                                {articles.map((article) => (
                                    <div className="article_content" key={article.id}>
                                        <Article article={article}/>
                                    </div>
                                ))}
                            </Carousel>
                        </div>
                    </div>

                    <div className="promo-time">
                        <div>
                            <h3>Big winter promotion </h3>
                        </div>
                    </div>

                    <div className='categories'>
                        <ul>
                            <Link to="/categorie/video-games"><li><img src="https://www.journaldugeek.com/content/uploads/2021/02/playstation-5.jpg" alt="video-game-categorie" />Video Game</li></Link>
                            <Link to="/categorie/connected-devices"><li><img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-pro-model-unselect-gallery-2-202209_GEO_EMEA?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1660753617539" alt="connected-divices-categorie" />Connected devices</li></Link>
                            <Link to="/categorie/home"><li><img src="https://prod-saint-gobain-fr.content.saint-gobain.io/sites/saint-gobain.fr/files/2020-07/choisir-lave-linge-la-maison-saint-gobain-une.jpg" alt="home-categorie" />Home</li></Link>
                            <Link to="/categorie/furniture"><li><img src="https://media.istockphoto.com/id/1031444360/photo/poster-above-white-cabinet-with-plant-next-to-grey-sofa-in-simple-living-room-interior-real.jpg?s=612x612&w=0&k=20&c=pKGXC920DL70qkNZp0xYpOF7AKQ9YFUSne_3wbQmJ5A=" alt="furniture-categorie" />Furniture</li></Link>
                        </ul>
                    </div>

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
