import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { listArticleDetails } from '../actions/articleAction'
import { addToCart } from '../actions/cartActions';
import Rating from '../components/Rating'
import '../styles/article/article_page.scss'

function ArticlePages() {

  const [qty, setQty] = useState(1)
  const { slug } = useParams()
  const dispatch = useDispatch()

  const articleDetails = useSelector(state => state.articleDetails)
  const { error, loading, article } = articleDetails


  const addToCartHandler = () => {
    if (slug) {
      dispatch(addToCart(slug, qty))
    }
  }

  useEffect(() => {
    dispatch(listArticleDetails(slug))
  }, [dispatch, slug])

  return (
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
                <p>{article.description}</p>
              </div>
              <div className='article-status'>
                <p>price: <span>{article.price} €</span></p>
                <p>Status: {article.countInStock > 0 ? <span>In Stock</span> : <span>Out of stock</span>}</p>
                {article.countInStock > 0 && (
                  <div>
                    <div>Qty</div>
                    <div>
                      <select value={qty} onChange={(e) => setQty(e.target.value)}>
                        {[...Array(article.countInStock).keys()].map((x) => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                )}
                <button onClick={addToCartHandler} disabled={article.countInStock === 0} type='button'>ADD TO CART </button>
              </div>
            </div>
          </div>
      }
    </main>
  )
}

export default ArticlePages
