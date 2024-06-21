import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { useResultContext } from '../contexts/ResultContextProvider';
import Loading from './Loading';


const Results = () => {
  const { results, loading, getResults, searchTerm } = useResultContext();
  const location = useLocation();



  useEffect(() => {
    console.log('useEffect triggered with searchTerm:', searchTerm);
    console.log('useEffect triggered with location.pathname:', location.pathname);

    if (searchTerm) {
      getResults(location.pathname,searchTerm)
    }

  }, [searchTerm, location.pathname]);

  // if (loading) return <Loading />
  if (loading) return <Loading />

  console.log(location.pathname)
  console.log(results)
  switch (location.pathname) {
    case '/search':
      return (
        <div className='flex flex-wrap justify-between space-y-3 sm:px-12'>
          {results?.result?.map(({ body, href }, index) => (
            <div key={index} className='md:w-2/5 w-full'>
              <a href={href} target='_blank' rel='noreferrer'>
                <p className='text-sm'>
                  {href}
                </p>
                <p className='text-lg hover:underline dark:text-blue-300 text-blue-700'>
                  {body.length > 50 ? body.substring(0, 50) : body}
                </p>
              </a>
            </div>
          ))}
        </div>
      )
    case '/images':
      return (
        <div className='flex flex-wrap justify-between items-center'>
          {results?.result?.map(({ image, url, title }, index) => (
            <div>
              <a className='sm:p-3 p-5' href={url} key={index} target='_blank' rel='noreferrer'>
                <img src={image}
                  onError={(e) => {
                    e.target.onerror = null; // To prevent infinite loop
                    e.target.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png'; // URL of your fallback image
                    e.target.alt = "Fallback image description"; // Alt text for the fallback image
                    e.target.width=150;
                    e.target.height=150;
                  }}
                  loading='lazy' width={150} height={150} />
                <p className='w-36 break-words text-sm mt-2'>
                  {title}
                </p>
              </a>
            </div>
          ))}
        </div>
      )
    case '/videos':
      return 'SEARCH'
    case '/news':
      return 'SEARCH'
    default:
      return 'ERROR!';
  }
}

export default Results