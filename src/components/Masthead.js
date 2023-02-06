import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from 'react'
// import Searchbar from "./Searchbar";

const Masthead = ({ isOpen, setOpen, onSearch }) => {
  const [searchInput, setSearchInput] = useState("")

  const handleSearchInput = (e) => {
    setSearchInput(e.target.value)
  }


  return (
    <div className="sticky top-0 z-20 flex items-center justify-between flex-grow w-full p-4 bg-stone-900">

       {/* Burger */}
       <div
        id="burger">
          <RxHamburgerMenu
            onClick={() => setOpen(!isOpen)}
            className="text-4xl cursor-pointer dark:text-stone-300 hover:text-stone-200 active:text-orange-400"/>
        </div>

       {/* Logo */}
       <div id="logo" className="text-4xl dark:text-stone-300">
          WOLFLIX
        </div>

        {/* <Searchbar /> */}
        <form className=""
          onSubmit={e => {
            e.preventDefault()
            onSearch(searchInput)
          }}>
          <label className="mb-2 text-sm font-medium sr-only text-stone-900 dark:text-white">Search</label>
          <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg aria-hidden="true" className="w-5 h-5 text-stone-500 dark:text-stone-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
              </div>
              <input
              onChange={handleSearchInput}
              type="search" id="movie-search" className="block w-full p-4 pl-10 text-sm border rounded-lg text-stone-900 border-stone-300 bg-stone-50 focus:outline-none focus:ring-orange-400 focus:border-orange-400 dark:bg-stone-900 dark:border-stone-600 dark:placeholder-stone-400 dark:text-white dark:focus:ring-orange-400 dark:focus:border-orange-400 dark:hover:border-stone-400" placeholder="Search Films, Series, ..." required />
              <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-stone-800 hover:bg-orange-600 focus:ring-4 outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg- dark:hover:bg-stone-600 dark:focus:ring-orange-800 dark:active:bg-orange-600">Search</button>
          </div>
        </form>
    </div>
  )
}

export default Masthead
