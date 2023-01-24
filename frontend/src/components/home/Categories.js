import React from 'react'
import { Link } from "react-router-dom";
import '../../styles/home/categories_section.scss'

function Categories() {
    return (

        <div className='categories'>
            <ul>
                <Link to="/categorie/video-games"><li><img src="https://www.journaldugeek.com/content/uploads/2021/02/playstation-5.jpg" alt="video-game-categorie" />Video Game</li></Link>
                <Link to="/categorie/connected-devices"><li><img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-pro-model-unselect-gallery-2-202209_GEO_EMEA?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1660753617539" alt="connected-divices-categorie" />Connected devices</li></Link>
                <Link to="/categorie/home"><li><img src="https://prod-saint-gobain-fr.content.saint-gobain.io/sites/saint-gobain.fr/files/2020-07/choisir-lave-linge-la-maison-saint-gobain-une.jpg" alt="home-categorie" />Home</li></Link>
                <Link to="/categorie/furniture"><li><img src="https://media.istockphoto.com/id/1031444360/photo/poster-above-white-cabinet-with-plant-next-to-grey-sofa-in-simple-living-room-interior-real.jpg?s=612x612&w=0&k=20&c=pKGXC920DL70qkNZp0xYpOF7AKQ9YFUSne_3wbQmJ5A=" alt="furniture-categorie" />Furniture</li></Link>
            </ul>
        </div>

    );
}

export default Categories
