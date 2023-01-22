import React from 'react'
import { useParams } from 'react-router-dom'
import articles from '../articles'
import '../styles/article/article_page.scss'

function ArticlePages({ match }) {
  const { slug } = useParams()
  if (!slug) return null
  const article = articles.find((a) => a.slug === slug)
  if (!article) return <div>Article not found</div>
  return (
    <>
      <main>
          <div className="container">
            <div className='article-container'>
              <div className='article-image'>
                <img src={article.image} alt={article.name} className="card-image" />
              </div>
              <div className='article-detail'>
                <h2>{article.name}</h2>
                <hr />
                <span>{article.reviews.average_rating}</span>
                <hr />
                <p>Price : {article.price} &euro;</p>
                <hr />
                <p>{article.description}</p>
              </div>
              <div className='article-status'>
                <p>price: <span>{article.price} &euro;</span></p> 
                <p>Staus: <span>In Stock</span></p>
                <button>ADD TO CART </button>
              </div>
            </div>
          </div>
      </main>
    </>
  )
}


export default ArticlePages