import './App.css';
import { useState } from 'react';
import Masthead from "./components/Masthead";
import Sidebar from "./components/Sidebar";
import MovieCard from './components/MovieCard';

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

function App() {

  const [movies, setMovies] = useState(movieData)
  const [playlists, setPlaylists] = useState(pldata)
  const [isOpen, setOpen] = useState(false)

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

  const onSearchMovies = (input) => {
   console.log("hello")
  }





  return (
    <div className="App bg-stone-900">
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
        <main className={`p-16 ${isOpen ? 'translate-x-[204px]' : 'translate-x-0' } ease-in-out duration-700 flex-grow bg-stone-900`}>
          <h1 className="z-10 mb-16 text-4xl font-bold text-left top-32 text-stone-200">Home</h1>
          <div className="movie-grid">
            {/* map all movies in moviedata to card in grid */}
            {console.log(movies)}
            {movies.map(movie => (
              <MovieCard movie={movie} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
