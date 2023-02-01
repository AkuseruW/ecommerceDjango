import React, { useEffect } from 'react'
import Article from '../components/home/Articles';
import { useDispatch, useSelector } from 'react-redux';
import { listArticles } from '../actions/articleAction';



export default function ArticlesListPages({ article }) {
    const dispatch = useDispatch()
    const articleList = useSelector(state => state.articleList)
    const { error, loading, articles } = articleList
    useEffect(() => {
        dispatch(listArticles())
    }, [dispatch])
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>

                <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {article.map((article) => (
                        <div key={article.id} className="group relative">
                            
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
