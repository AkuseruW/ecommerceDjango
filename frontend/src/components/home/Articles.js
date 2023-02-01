import React from 'react'
import { Link } from "react-router-dom";
// import { HiOutlineHeart } from "react-icons/hi2";
import '../../styles/home/articles_card.scss'


function Article({ article }) {
    return (
        <>
            {/* <HiOutlineHeart className='icon' size={20} style={{ position: 'absolute', top: '58px', right: '5px', color: 'white' }} /> */}
            <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                <img
                    src={article.image}
                    alt={article.name}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
            </div>
            <div className="mt-4 flex justify-between">
                <div>
                    <h3 className="text-sm text-gray-700">
                        <Link to={`article/${article.slug}`}>
                            <span aria-hidden="true" className="absolute inset-0" />
                            {article.name}
                        </Link>
                    </h3>
                </div>
                <p className="text-sm font-medium text-gray-900">{article.price}</p>
            </div>
        </>
    );
}

export default Article
