import './index.css'
import tweek from './assets/img/t&cweek.png'
import { Routes, Route } from 'react-router-dom'
import Home from './layout/Home'

export default function Nav(){
    return (
        <nav className="font-sans flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-2 px-6 bg-white shadow sm:items-baseline w-full">
  <div className="sm:mb-0">
  <a href="#" className="text-2xl no-underline text-grey-darkest hover:text-blue-dark"><img
            alt="Your Company"
            src={tweek}
            className="h-10"
          /></a>
  </div>
  <div className="mb-2 sm:mb-0">
    <a href="#" className="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2">One</a>
    <a href="#" className="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2">Two</a>
    <a href="#" className="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2">Sing in</a>
  </div>
</nav>
    )
} 