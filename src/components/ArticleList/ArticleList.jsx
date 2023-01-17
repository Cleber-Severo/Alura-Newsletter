import React from 'react'
import data from '../../../articles.json'
import Article from '../article/Article'

const ArticleList = () => {
  return (
    <div className='mt-5 grid gap-5 m-auto max-w-2xl sm:mt-0 sm:grid-cols-2 lg:grid-cols-3 lg:max-w-[1000px]'>
       {
        data.map( (props,index) => <Article key={index} {...props}/> )
      }
    </div>
  )
}

export default ArticleList