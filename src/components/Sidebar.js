import { useState, useEffect } from "react";
import { MdPlaylistPlay } from "react-icons/md";
import { TiHome } from "react-icons/ti";
import AddPlaylistForm from "./AddPlaylistForm";
import Button from "./Button";


const Sidebar = ({ isOpen, playlists, onSave}) => {
  const [formShow, setFormShow] = useState(false)

  return (
    <div className={`fixed min-w-[140px] h-screen left-0 p-4 text-stone-300 text-l
    ${isOpen ? 'translate-x-0' : '-translate-x-full'} ease-in-out duration-700`}>
      <ul className='flex flex-col mb-4'>
        {/* fixed list items */}
        <li className='flex items-center p-1 m-1 text-lg rounded-lg hover:bg-stone-800 hover:text-stone-100 hover:shadow-lg hover:shadow-stone-900'>
          <TiHome className="m-1 text-3xl" />
          <p className='mx-4 '>Home</p>
        </li>
        {/* fixed list items */}
        {playlists.map(playlist =>
        (
          <li key={playlist.id} className='flex items-center p-1 m-1 text-lg rounded-lg hover:bg-stone-800 hover:text-stone-100 hover:shadow-lg hover:shadow-stone-900'>
          <MdPlaylistPlay className="m-1 text-3xl"/>
          <p className='mx-4 '>{playlist.title}</p>
        </li>
        ))}
      </ul>
      {formShow ? <AddPlaylistForm onSave={onSave} /> : <Button text="Add Playlist" onAddPlaylist={() => setFormShow(!formShow)} />}


    </div>
  )
}

export default Sidebar
