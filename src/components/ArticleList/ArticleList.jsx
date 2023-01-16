import React from 'react'
import data from '../../../articles.json'

const ArticleList = () => {
  return (
    <div className='mt-5 grid gap-5 m-auto max-w-2xl sm:mt-0 sm:grid-cols-2 lg:grid-cols-3'>
       {data.map( (props,index) => <p key={index}>{props.title}</p> )}
    </div>
  )
}

export default ArticleList