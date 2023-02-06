
const Button = ({ text, color, onToggle ,onAddPlaylist}) => {


  return (
    <button
      className="text-stone-400 right-2.5 bottom-2.5 bg-stone-800 hover:bg-orange-600 focus:ring-4 outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg- dark:hover:bg-stone-600 dark:focus:ring-orange-800 dark:active:bg-orange-600 hover:text-white"
      onClick={onAddPlaylist}
      >
      {text}
    </button>
  )
}

export default Button
