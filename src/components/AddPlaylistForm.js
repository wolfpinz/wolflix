import { useState } from 'react'

const AddPlaylistForm = ({ onSave }) => {
  const [title, setTitle] = useState("")

  const handleInput = (e) => {
    setTitle(e.target.value)
  }
  const newPlaylist = {
    title: title,
    movies: []
  }

  return (
    <form className='relative'
      onSubmit={e => {
        e.preventDefault()
        onSave(newPlaylist)
      }}
    >
      <div className='flex items-center'>
        <input
          onChange={handleInput}
          type="text"
          placeholder="Add Title"
          className="p-4 pl-4 text-xs border rounded-lg w-44 text-stone-900 border-stone-300 bg-stone-50 focus:outline-none focus:ring-orange-400 focus:border-orange-400 dark:bg-stone-900 dark:border-stone-600 dark:placeholder-stone-400 dark:text-white dark:focus:ring-orange-400 dark:focus:border-orange-400 dark:hover:border-stone-400"
          />
        {/* ADD BUTTON */}
        <input
          className='absolute px-2 text-2xl font-medium text-white rounded-lg outline-none right-2 bottom-2 top-2 bg-stone-800 hover:bg-orange-600 focus:ring-4 focus:ring-orange-300 dark:bg- dark:hover:bg-stone-600 dark:focus:ring-orange-800 dark:active:bg-orange-600'
          type="submit"
          value="+"
          />
      </div>
    </form>
  )
}

export default AddPlaylistForm
