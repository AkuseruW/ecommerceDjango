import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { listArticleDetails } from '../actions/articleAction'
import Rating from '../components/Rating'
import '../styles/article/article_page.scss'

function ArticlePages() {
  const { slug } = useParams()
  const dispatch = useDispatch()

  const articleDetails = useSelector(state => state.articleDetails)
  const { error, loading, article } = articleDetails

  useEffect(() => {
    dispatch(listArticleDetails(slug))
  }, [dispatch, slug])
  console.log(article);

  return (
    <>
      <main>
        {loading ? <h2>Loading ...</h2>
          : error ? <h3>{error}</h3>
            :
            <div className="container">
              <div className='article-container'>
                <div className='article-image'>
                  <img src={article.image} alt={article.name} className="card-image" />
                </div>
                <div className='article-detail'>
                  <h2>{article.name}</h2>
                  <hr />
                  <Rating value={article.rating} text={`${article.numReviews} reviews`} color={'#f8e825'} />
                  <hr />
                  <p>Price : {article.price} €</p>
                  <hr />
                  {/* <p>{article.description}</p> */}
                </div>
                <div className='article-status'>
                  <p>price: <span>{article.price} €</span></p>
                  <p>Status: <span>In Stock</span></p>
                  <button>ADD TO CART </button>
                </div>
              </div>
            </div>
        }
      </main>
    </>
  )
}

export default ArticlePages  