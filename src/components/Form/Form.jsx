import React from 'react'
import Input from '../Input/Input';

const Form = ({ onSubmit}) => {
  
    const safeSubmit = event => {
        event.preventDefault();
        event.stopPropagation();
        const name = event.target[0].value;
        const email = event.target[1].value;
        onSubmit({name, email})
    }
    return (
    <form onSubmit={safeSubmit} className='h-full flex flex-col items-center justify-center gap-10 -mt-20'>
        <input type="text" className='alura-input' required placeholder='Insira seu nome'/>
        <input type="email" className='alura-input' required placeholder='Insira seu email'/>
        <button type='submit' className='bg-alura-100 dark:bg-dark-200 rounded-full w-full max-w-sm text-gray-200 dark:text-gray-200 uppercase px-5 py-1 outline-none hover:animate-pulse hover:shadow-md hover:shadow-gray-500 dark:hover:shadow-black'>Seguir</button>
    </form>
  )
}

export default Form