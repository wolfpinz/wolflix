import './App.css';
import { React, useState } from 'react';
import Masthead from "./components/Masthead";
import Sidebar from "./components/Sidebar";
import MovieCard from './components/MovieCard';
import { IoAddCircleOutline } from "react-icons/io5";



const pldata = [
  {
    id: 1,
    title: "Adventure",
    movies: [
      {
        "Title": "Harry Potter and the Deathly Hallows: Part 2",
        "Year": "2011",
        "Rated": "PG-13",
        "Released": "15 Jul 2011",
        "Runtime": "130 min",
        "Genre": "Adventure, Family, Fantasy",
        "Director": "David Yates",
        "Writer": "Steve Kloves, J.K. Rowling",
        "Actors": "Daniel Radcliffe, Emma Watson, Rupert Grint",
        "Plot": "Harry, Ron, and Hermione search for Voldemort's remaining Horcruxes in their effort to destroy the Dark Lord as the final battle rages on at Hogwarts.",
        "Language": "English, Latin",
        "Country": "United Kingdom, United States",
        "Awards": "Nominated for 3 Oscars. 47 wins & 94 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
        "Ratings": [
          {
          "Source": "Internet Movie Database",
          "Value": "8.1/10"
          },
          {
          "Source": "Rotten Tomatoes",
          "Value": "96%"
          },
          {
          "Source": "Metacritic",
          "Value": "85/100"
          }
          ],
        "imdbRating": "8.1",
        "imdbVotes": "882,427",
        "imdbID": "tt1201607",
        "Type": "movie",
        "DVD": "11 Nov 2011",
        "BoxOffice": "$381,447,587",
        "Production": "N/A",
        "Website": "N/A",
        "Response": "True"
      }
    ]
  },
  {
    id: 2,
    title: "Comedy",
    movies: []
  },
  {
    id: 3,
    title: "Slowburn",
    movies: []
  },
  {
    id: 4,
    title: "Crime",
    movies: []
  }
]
// movie array for search, replace with search results
const movieData= [
  {
    "Title": "Harry Potter and the Deathly Hallows: Part 2",
    "Year": "2011",
    "Rated": "PG-13",
    "Released": "15 Jul 2011",
    "Runtime": "130 min",
    "Genre": "Adventure, Family, Fantasy",
    "Director": "David Yates",
    "Writer": "Steve Kloves, J.K. Rowling",
    "Actors": "Daniel Radcliffe, Emma Watson, Rupert Grint",
    "Plot": "Harry, Ron, and Hermione search for Voldemort's remaining Horcruxes in their effort to destroy the Dark Lord as the final battle rages on at Hogwarts.",
    "Language": "English, Latin",
    "Country": "United Kingdom, United States",
    "Awards": "Nominated for 3 Oscars. 47 wins & 94 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
    "Ratings": [
    {
    "Source": "Internet Movie Database",
    "Value": "8.1/10"
    },
    {
    "Source": "Rotten Tomatoes",
    "Value": "96%"
    },
    {
    "Source": "Metacritic",
    "Value": "85/100"
    }
    ],
    "Metascore": "85",
    "imdbRating": "8.1",
    "imdbVotes": "882,427",
    "imdbID": "tt1201607",
    "Type": "movie",
    "DVD": "11 Nov 2011",
    "BoxOffice": "$381,447,587",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
  },
  {
    "Title": "The Lord of the Rings: The Fellowship of the Ring",
    "Year": "2001",
    "Rated": "PG-13",
    "Released": "19 Dec 2001",
    "Runtime": "178 min",
    "Genre": "Action, Adventure, Drama",
    "Director": "Peter Jackson",
    "Writer": "J.R.R. Tolkien, Fran Walsh, Philippa Boyens",
    "Actors": "Elijah Wood, Ian McKellen, Orlando Bloom",
    "Plot": "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",
    "Language": "English, Sindarin",
    "Country": "New Zealand, United States",
    "Awards": "Won 4 Oscars. 123 wins & 126 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
    "Ratings": [
    {
    "Source": "Internet Movie Database",
    "Value": "8.8/10"
    },
    {
    "Source": "Rotten Tomatoes",
    "Value": "91%"
    },
    {
    "Source": "Metacritic",
    "Value": "92/100"
    }
    ],
    "Metascore": "92",
    "imdbRating": "8.8",
    "imdbVotes": "1,884,994",
    "imdbID": "tt0120737",
    "Type": "movie",
    "DVD": "06 Aug 2002",
    "BoxOffice": "$316,115,420",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
  },
  {
    "Title": "Harry Potter and the Deathly Hallows: Part 2",
    "Year": "2011",
    "Rated": "PG-13",
    "Released": "15 Jul 2011",
    "Runtime": "130 min",
    "Genre": "Adventure, Family, Fantasy",
    "Director": "David Yates",
    "Writer": "Steve Kloves, J.K. Rowling",
    "Actors": "Daniel Radcliffe, Emma Watson, Rupert Grint",
    "Plot": "Harry, Ron, and Hermione search for Voldemort's remaining Horcruxes in their effort to destroy the Dark Lord as the final battle rages on at Hogwarts.",
    "Language": "English, Latin",
    "Country": "United Kingdom, United States",
    "Awards": "Nominated for 3 Oscars. 47 wins & 94 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
    "Ratings": [
    {
    "Source": "Internet Movie Database",
    "Value": "8.1/10"
    },
    {
    "Source": "Rotten Tomatoes",
    "Value": "96%"
    },
    {
    "Source": "Metacritic",
    "Value": "85/100"
    }
    ],
    "Metascore": "85",
    "imdbRating": "8.1",
    "imdbVotes": "882,427",
    "imdbID": "tt1201607",
    "Type": "movie",
    "DVD": "11 Nov 2011",
    "BoxOffice": "$381,447,587",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
  },
  {
    "Title": "The Lord of the Rings: The Fellowship of the Ring",
    "Year": "2001",
    "Rated": "PG-13",
    "Released": "19 Dec 2001",
    "Runtime": "178 min",
    "Genre": "Action, Adventure, Drama",
    "Director": "Peter Jackson",
    "Writer": "J.R.R. Tolkien, Fran Walsh, Philippa Boyens",
    "Actors": "Elijah Wood, Ian McKellen, Orlando Bloom",
    "Plot": "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",
    "Language": "English, Sindarin",
    "Country": "New Zealand, United States",
    "Awards": "Won 4 Oscars. 123 wins & 126 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
    "Ratings": [
    {
    "Source": "Internet Movie Database",
    "Value": "8.8/10"
    },
    {
    "Source": "Rotten Tomatoes",
    "Value": "91%"
    },
    {
    "Source": "Metacritic",
    "Value": "92/100"
    }
    ],
    "Metascore": "92",
    "imdbRating": "8.8",
    "imdbVotes": "1,884,994",
    "imdbID": "tt0120737",
    "Type": "movie",
    "DVD": "06 Aug 2002",
    "BoxOffice": "$316,115,420",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
  },
  {
    "Title": "Harry Potter and the Deathly Hallows: Part 2",
    "Year": "2011",
    "Rated": "PG-13",
    "Released": "15 Jul 2011",
    "Runtime": "130 min",
    "Genre": "Adventure, Family, Fantasy",
    "Director": "David Yates",
    "Writer": "Steve Kloves, J.K. Rowling",
    "Actors": "Daniel Radcliffe, Emma Watson, Rupert Grint",
    "Plot": "Harry, Ron, and Hermione search for Voldemort's remaining Horcruxes in their effort to destroy the Dark Lord as the final battle rages on at Hogwarts.",
    "Language": "English, Latin",
    "Country": "United Kingdom, United States",
    "Awards": "Nominated for 3 Oscars. 47 wins & 94 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
    "Ratings": [
    {
    "Source": "Internet Movie Database",
    "Value": "8.1/10"
    },
    {
    "Source": "Rotten Tomatoes",
    "Value": "96%"
    },
    {
    "Source": "Metacritic",
    "Value": "85/100"
    }
    ],
    "Metascore": "85",
    "imdbRating": "8.1",
    "imdbVotes": "882,427",
    "imdbID": "tt1201607",
    "Type": "movie",
    "DVD": "11 Nov 2011",
    "BoxOffice": "$381,447,587",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
  },
  {
    "Title": "The Lord of the Rings: The Fellowship of the Ring",
    "Year": "2001",
    "Rated": "PG-13",
    "Released": "19 Dec 2001",
    "Runtime": "178 min",
    "Genre": "Action, Adventure, Drama",
    "Director": "Peter Jackson",
    "Writer": "J.R.R. Tolkien, Fran Walsh, Philippa Boyens",
    "Actors": "Elijah Wood, Ian McKellen, Orlando Bloom",
    "Plot": "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",
    "Language": "English, Sindarin",
    "Country": "New Zealand, United States",
    "Awards": "Won 4 Oscars. 123 wins & 126 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
    "Ratings": [
    {
    "Source": "Internet Movie Database",
    "Value": "8.8/10"
    },
    {
    "Source": "Rotten Tomatoes",
    "Value": "91%"
    },
    {
    "Source": "Metacritic",
    "Value": "92/100"
    }
    ],
    "Metascore": "92",
    "imdbRating": "8.8",
    "imdbVotes": "1,884,994",
    "imdbID": "tt0120737",
    "Type": "movie",
    "DVD": "06 Aug 2002",
    "BoxOffice": "$316,115,420",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
  },
  {
    "Title": "Harry Potter and the Deathly Hallows: Part 2",
    "Year": "2011",
    "Rated": "PG-13",
    "Released": "15 Jul 2011",
    "Runtime": "130 min",
    "Genre": "Adventure, Family, Fantasy",
    "Director": "David Yates",
    "Writer": "Steve Kloves, J.K. Rowling",
    "Actors": "Daniel Radcliffe, Emma Watson, Rupert Grint",
    "Plot": "Harry, Ron, and Hermione search for Voldemort's remaining Horcruxes in their effort to destroy the Dark Lord as the final battle rages on at Hogwarts.",
    "Language": "English, Latin",
    "Country": "United Kingdom, United States",
    "Awards": "Nominated for 3 Oscars. 47 wins & 94 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
    "Ratings": [
    {
    "Source": "Internet Movie Database",
    "Value": "8.1/10"
    },
    {
    "Source": "Rotten Tomatoes",
    "Value": "96%"
    },
    {
    "Source": "Metacritic",
    "Value": "85/100"
    }
    ],
    "Metascore": "85",
    "imdbRating": "8.1",
    "imdbVotes": "882,427",
    "imdbID": "tt1201607",
    "Type": "movie",
    "DVD": "11 Nov 2011",
    "BoxOffice": "$381,447,587",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
  },
  {
    "Title": "The Lord of the Rings: The Fellowship of the Ring",
    "Year": "2001",
    "Rated": "PG-13",
    "Released": "19 Dec 2001",
    "Runtime": "178 min",
    "Genre": "Action, Adventure, Drama",
    "Director": "Peter Jackson",
    "Writer": "J.R.R. Tolkien, Fran Walsh, Philippa Boyens",
    "Actors": "Elijah Wood, Ian McKellen, Orlando Bloom",
    "Plot": "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",
    "Language": "English, Sindarin",
    "Country": "New Zealand, United States",
    "Awards": "Won 4 Oscars. 123 wins & 126 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
    "Ratings": [
    {
    "Source": "Internet Movie Database",
    "Value": "8.8/10"
    },
    {
    "Source": "Rotten Tomatoes",
    "Value": "91%"
    },
    {
    "Source": "Metacritic",
    "Value": "92/100"
    }
    ],
    "Metascore": "92",
    "imdbRating": "8.8",
    "imdbVotes": "1,884,994",
    "imdbID": "tt0120737",
    "Type": "movie",
    "DVD": "06 Aug 2002",
    "BoxOffice": "$316,115,420",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
  },
  {
    "Title": "Harry Potter and the Deathly Hallows: Part 2",
    "Year": "2011",
    "Rated": "PG-13",
    "Released": "15 Jul 2011",
    "Runtime": "130 min",
    "Genre": "Adventure, Family, Fantasy",
    "Director": "David Yates",
    "Writer": "Steve Kloves, J.K. Rowling",
    "Actors": "Daniel Radcliffe, Emma Watson, Rupert Grint",
    "Plot": "Harry, Ron, and Hermione search for Voldemort's remaining Horcruxes in their effort to destroy the Dark Lord as the final battle rages on at Hogwarts.",
    "Language": "English, Latin",
    "Country": "United Kingdom, United States",
    "Awards": "Nominated for 3 Oscars. 47 wins & 94 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
    "Ratings": [
    {
    "Source": "Internet Movie Database",
    "Value": "8.1/10"
    },
    {
    "Source": "Rotten Tomatoes",
    "Value": "96%"
    },
    {
    "Source": "Metacritic",
    "Value": "85/100"
    }
    ],
    "Metascore": "85",
    "imdbRating": "8.1",
    "imdbVotes": "882,427",
    "imdbID": "tt1201607",
    "Type": "movie",
    "DVD": "11 Nov 2011",
    "BoxOffice": "$381,447,587",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
  },
  {
    "Title": "The Lord of the Rings: The Fellowship of the Ring",
    "Year": "2001",
    "Rated": "PG-13",
    "Released": "19 Dec 2001",
    "Runtime": "178 min",
    "Genre": "Action, Adventure, Drama",
    "Director": "Peter Jackson",
    "Writer": "J.R.R. Tolkien, Fran Walsh, Philippa Boyens",
    "Actors": "Elijah Wood, Ian McKellen, Orlando Bloom",
    "Plot": "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",
    "Language": "English, Sindarin",
    "Country": "New Zealand, United States",
    "Awards": "Won 4 Oscars. 123 wins & 126 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
    "Ratings": [
    {
    "Source": "Internet Movie Database",
    "Value": "8.8/10"
    },
    {
    "Source": "Rotten Tomatoes",
    "Value": "91%"
    },
    {
    "Source": "Metacritic",
    "Value": "92/100"
    }
    ],
    "Metascore": "92",
    "imdbRating": "8.8",
    "imdbVotes": "1,884,994",
    "imdbID": "tt0120737",
    "Type": "movie",
    "DVD": "06 Aug 2002",
    "BoxOffice": "$316,115,420",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
  },
  {
    "Title": "Harry Potter and the Deathly Hallows: Part 2",
    "Year": "2011",
    "Rated": "PG-13",
    "Released": "15 Jul 2011",
    "Runtime": "130 min",
    "Genre": "Adventure, Family, Fantasy",
    "Director": "David Yates",
    "Writer": "Steve Kloves, J.K. Rowling",
    "Actors": "Daniel Radcliffe, Emma Watson, Rupert Grint",
    "Plot": "Harry, Ron, and Hermione search for Voldemort's remaining Horcruxes in their effort to destroy the Dark Lord as the final battle rages on at Hogwarts.",
    "Language": "English, Latin",
    "Country": "United Kingdom, United States",
    "Awards": "Nominated for 3 Oscars. 47 wins & 94 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
    "Ratings": [
    {
    "Source": "Internet Movie Database",
    "Value": "8.1/10"
    },
    {
    "Source": "Rotten Tomatoes",
    "Value": "96%"
    },
    {
    "Source": "Metacritic",
    "Value": "85/100"
    }
    ],
    "Metascore": "85",
    "imdbRating": "8.1",
    "imdbVotes": "882,427",
    "imdbID": "tt1201607",
    "Type": "movie",
    "DVD": "11 Nov 2011",
    "BoxOffice": "$381,447,587",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
  },
  {
    "Title": "The Lord of the Rings: The Fellowship of the Ring",
    "Year": "2001",
    "Rated": "PG-13",
    "Released": "19 Dec 2001",
    "Runtime": "178 min",
    "Genre": "Action, Adventure, Drama",
    "Director": "Peter Jackson",
    "Writer": "J.R.R. Tolkien, Fran Walsh, Philippa Boyens",
    "Actors": "Elijah Wood, Ian McKellen, Orlando Bloom",
    "Plot": "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",
    "Language": "English, Sindarin",
    "Country": "New Zealand, United States",
    "Awards": "Won 4 Oscars. 123 wins & 126 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
    "Ratings": [
    {
    "Source": "Internet Movie Database",
    "Value": "8.8/10"
    },
    {
    "Source": "Rotten Tomatoes",
    "Value": "91%"
    },
    {
    "Source": "Metacritic",
    "Value": "92/100"
    }
    ],
    "Metascore": "92",
    "imdbRating": "8.8",
    "imdbVotes": "1,884,994",
    "imdbID": "tt0120737",
    "Type": "movie",
    "DVD": "06 Aug 2002",
    "BoxOffice": "$316,115,420",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
  }
]



// const BoxComponent = () => {
//   return (
//     <div className="absolute top-[300px] left-[110px] bg-stone-900 text-stone-300 z-10 overflow-visible">
//       <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label>
//       <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
//         <option selected>Select a Playlist</option>
//         <option value="US">Adventure</option>
//         <option value="CA">Comedy</option>
//         <option value="FR">Slowburn</option>
//         <option value="DE">Crime</option>
//       </select>
//     </div>
//   )
// }
const Modal = ({ onClose, movie }) => {

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
                    <h3 className="text-xl font-semibold text-stone-300 dark:text-white">
                        {movie.Title}
                    </h3>
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
                    <span>{movie.imdbRating}</span>
                  </div>
                    <p className="text-base leading-relaxed text-stone-300 dark:text-stone-400">
                        {movie.Plot}
                    </p>
                </div>

                {/* <!-- Modal footer --> */}
                <div className="flex items-center justify-between p-6 space-x-2">

                  <select id="movie-select" class="bg-stone-900 border border-stone-700 text-stone-300 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 p-2.5">
                    <option selected>add to playlist</option>
                    <option value="US">Adventure</option>
                    <option value="CA">Comedy</option>
                    <option value="FR">Slowburn</option>
                    <option value="DE">Crime</option>
                  </select>
                  {/* Add Button / Icon */}
                  <IoAddCircleOutline
                  // onClick={onAdd}
                    className='text-5xl text-stone-300'/>
                  {/* <label for="movie" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label> */}

                  {/* <button data-modal-hide="defaultModal" type="button" className="text-stone-300 bg-white hover:bg-stone-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-300 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Decline</button> */}
                </div>
            </div>
          </div>
      </div>
    </div>
  )
}

function App() {

  const [movies, setMovies] = useState(movieData)
  const [playlists, setPlaylists] = useState(pldata)
  const [isOpen, setOpen] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const [clickedMovie, setClickedMovie] = useState(false)


  const onSavePlaylist = (title) => {
    // set next ID
    const lastPlaylist = playlists.at(-1)
    const nextID = lastPlaylist.id + 1
    // set Task
    setPlaylists([...playlists, {
      id: nextID,
      title: title,
      movies: []
    }])
  }

  const onSearchMovies = async (searchInput) => {
   // API request
   const result = await fetchMovies(searchInput)
   setMovies(result)
   // also (not here): list item key = imdbID
  }

  const fetchMovies =  async (searchInput) => {
    // search parameters:
      // 's' returns array.
      // 't' returns single movie, with more info
    let url = `http://www.omdbapi.com/?s=${searchInput}&apikey=${process.env.REACT_APP_OMDB_API_KEY}`

    // afetch/async await function
    const res = await fetch(url)
    const data = await res.json()

    return data.Search
  }

  // const closeModal = (e) => {
  //   e.stopPropagation();
  //   if (modalOpen) {
  //     setModalOpen(!modalOpen)
  //   }
  // }
  const handleCardClick = ( movie ) => {
    setClickedMovie(movie)
    setModalOpen(!modalOpen)
  }


  return (
      <div
      // onClick={closeModal}
      className="App bg-stone-900">

        { modalOpen && <Modal movie={clickedMovie} onClose={() => setModalOpen(!modalOpen)} />}

        <Masthead
          isOpen={isOpen}
          setOpen={setOpen}
          onSearch={onSearchMovies}
          />


        <div className='flex'>
          <Sidebar
            playlists={playlists}
            onSave={onSavePlaylist}
            isOpen={isOpen} />

          <main className={`p-16 ${isOpen ? 'translate-x-[204px] mr-48' : 'translate-x-0' } ease-in-out duration-700 flex-grow bg-stone-900`}>
            <h1 className="z-10 mb-16 text-4xl font-bold text-left top-32 text-stone-200">Home</h1>
            <div className="movie-grid">
              {/* map all movies in moviedata to card in grid */}
              {/* {console.log(movies)} */}
              {movies.map(movie => (
                <MovieCard
                  key={movie.imdbID}
                  movie={movie}
                  onCardClick={handleCardClick} />
              ))}
            </div>

          </main>
        </div>
      </div>
  );
}

export default App;
