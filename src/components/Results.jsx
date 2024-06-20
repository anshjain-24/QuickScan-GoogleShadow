import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { useResultContext } from '../contexts/ResultContextProvider';
import Loading from './Loading';


const Results = () => {
  const { results, loading, getResults, searchTerm } = useResultContext();
  const location = useLocation();

  useEffect(() => {
    getResults('imagesearch')
  }, []);

  if (loading) return <Loading />

  console.log(location.pathname)
console.log(results)
  switch (location.pathname) {
    case '/search':
      return (
        <div className='flex flex-wrap justify-between space-y-6 sm:px-56'>
          {results?.result?.map(({ url, title }, index) => (
            <div key={index} className='md:w-2/5 w-full'>
              <a href={url} target='_blank' rel='noreferrer'>
                <p className='text-sm'>
                  {url.length>30 ? url.substring(0,30) : url}
                </p>
                <p className='text-lg hover:underline dark:text-blue-300 text-blue-700'>
                  {title}
                </p>
              </a>
            </div>
          ))}
        </div>
      )
    case '/images':
      return 'SEARCH'
    case '/videos':
      return 'SEARCH'
    case '/news':
      return 'SEARCH'
    default:
      return 'ERROR!';
  }
}

export default Results