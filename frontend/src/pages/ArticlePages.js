// import React, { useState, useEffect } from 'react'
// import { useParams } from 'react-router-dom'
// import articles from '../articles'
// import axios from 'axios'
// import '../styles/article/article_page.scss'

// function ArticlePages({ match }) {
//   const [article, setArticle] = useState([])


//   useEffect(() => {

//     async function fetctArticle() {
//       const { data } = await axios.get(`/api/article/${match.params.slug}`)
//       setArticle(data)
//     }

//     fetctArticle()

//   }, [])

//   const { slug } = useParams()
//   if (!slug) return null
//   article = articles.find((a) => a.slug === slug)
//   if (!article) return <div>Article not found</div>

//   return (
//     <>
//       <main>
//         <div className="container">
//           <div className='article-container'>
//             <div className='article-image'>
//               <img src={article.image} alt={article.name} className="card-image" />
//             </div>
//             <div className='article-detail'>
//               <h2>{article.name}</h2>
//               <hr />
//               <span>{article.reviews.average_rating}</span>
//               <hr />
//               <p>Price : {article.price} &euro;</p>
//               <hr />
//               <p>{article.description}</p>
//             </div>
//             <div className='article-status'>
//               <p>price: <span>{article.price} &euro;</span></p>
//               <p>Staus: <span>In Stock</span></p>
//               <button>ADD TO CART </button>
//             </div>
//           </div>
//         </div>
//       </main>
//     </>
//   )
// }


// export default ArticlePages





import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import '../styles/article/article_page.scss'

function ArticlePages({ match }) {
  const [article, setArticle] = useState([])

  const { slug } = useParams()
  useEffect(() => {
    async function fetctArticle() {
      const { data } = await axios.get(`/api/article/${slug}`)
      setArticle(data)
      console.log(data)
    }

    fetctArticle()
  }, [slug])

  if (!article) return null

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
              {/* <span>{article.reviews.average_rating}</span> */}
              <hr />
              <p>Price : {article.price} €</p>
              <hr />
              <p>{article.description}</p>
            </div>
            <div className='article-status'>
              <p>price: <span>{article.price} €</span></p>
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