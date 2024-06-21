import React, { useEffect, useState } from 'react'
import { useDebounce } from 'use-debounce'
import Links from './Links'
import { useResultContext } from '../contexts/ResultContextProvider';

const Search = () => {
  const [text, setText] = useState("Google");
  const { setSearchTerm } = useResultContext();
  const [debouncedValue] = useDebounce(text, 5000);

  useEffect(() => {
    if (debouncedValue) setSearchTerm(debouncedValue)
  }, [debouncedValue])

  return (
    <div className='-mt-12 mb-3 '>
      <input
        type='text'
        value={text}
        className='ml-12 items-center h-10 dark:bg-gray-200 border rounded-full shadow-sm outline-none p-6 text-black hover:shadow-lg'
        placeholder='search anything'
        onChange={(e) => setText(e.target.value)}
      />

      {!text && (
        <button type='button' className='absolute top-1.5 right-4  text-2xl text-gray-500'
          onClick={() => setText('')}>
          X
        </button>
      )}
      <Links />
    </div>
  )
}

export default Search