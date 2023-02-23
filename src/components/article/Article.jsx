import React from 'react'

const Article = ({text, title, tags, image, alt}) => {
  return (
    <div className='p-5 bg-gray-200 dark:bg-dark-200 sm:rounded-xl sm:shadow-lg flex flex-col items-center gap-2'>
        <h3 className='text-xl text-alura-200 dark:text-gray-200 font-bold'>{title}</h3>
        <div className='w-full hidden sm:flex sm:flex-row sm:justify-end sm:gap-2 pr-5'>
          {tags.map(tag => <span key={tag} className='bg-alura-100 dark:bg-dark-100 px-4 py-1 rounded-full text-gray-200 dark:text-gray-200 text-xs uppercase font-bold' >{tag}</span>)}
        </div>
        
        <div className='grid  gap-1'>
            {
                text.map((content,index) => <p key={index} className='text-alura-200 dark:text-gray-400' >{content}</p> )
            }
        </div>

       {image && <img src={image} alt="aaa" />}
       
    </div>
  )
}

export default Article