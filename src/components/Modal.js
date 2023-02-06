import { IoAddCircleOutline } from "react-icons/io5";
import { React, useState } from 'react';



const Modal = ({ onClose, movie, playlists, onAdd }) => {
  const  [selectedPlaylistTitle, setSelectedPlaylistTitle] = useState("")


  return (
    <div>
      {/* // <!-- Main modal --> */}
      <div id="defaultModal" tabIndex="-1" aria-hidden="true" className="fixed top-0 left-0 right-0 z-40 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full">
          <div className="relative z-50 flex w-full h-full max-w-2xl md:h-auto -translate-x-2/4 -translate-y-2/4 top-2/4 left-2/4 ">
              {/* <!-- Modal content --> */}
            <img src={movie.Poster} alt="" />
            <div className="relative shadow bg-stone-900 dark:bg-gray-700 text-stone-200">
                {/* <!-- Modal header --> */}
                <div className="flex items-start justify-between p-4 rounded-t dark:ray-600">
                    <h2 className="text-xl font-semibold text-stone-300 dark:text-white">
                        {movie.Title}
                    </h2>
                    <button onClick={onClose} type="button" className="text-stone-400 bg-transparent hover:bg-stone-200 hover:text-stone-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-stone-600 dark:hover:text-white" data-modal-hide="defaultModal">
                        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        <span className="sr-only">Close modal</span>
                    </button>
                </div>
                {/* <!-- Modal body --> */}
                <div className="p-6 space-y-6">
                  <div className='flex justify-between'>
                    <span>{movie.Year}</span>
                    <span>{movie.Runtime}</span>
                    <span>{movie.imdbRating} ✭</span>
                  </div>
                    <p className="text-base leading-relaxed text-stone-300 dark:text-stone-400">
                        {movie.Plot}
                    </p>
                </div>

                {/* <!-- Modal footer --> */}

                <div className="absolute bottom-0 w-full p-6 space-x-2">
                  <h3 className='p-2.5'>Save this film?</h3>
                  <div className='flex items-center justify-between'>
                  <select onChange={(e) => {setSelectedPlaylistTitle(e.target.value)}} id="movie-select" class="bg-stone-900 border border-stone-700 text-stone-500 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 p-2.5">
                    <option disabled selected hidden>select playlist</option>

                    {playlists.map(playlist => <option value={playlist.title}>{playlist.title}</option> )}

                  </select>
                  {/* Add Button / Icon */}
                  <IoAddCircleOutline
                    // onClick={() => {console.log(selectedPlaylistTitle, movie)}}
                    onClick={() => {onAdd(selectedPlaylistTitle, movie) }}
                    className='text-6xl text-stone-300'/>
                  </div>
                  {/* <label for="movie" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label> */}

                  {/* <button data-modal-hide="defaultModal" type="button" className="text-stone-300 bg-white hover:bg-stone-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-300 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Decline</button> */}
                </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Modal
