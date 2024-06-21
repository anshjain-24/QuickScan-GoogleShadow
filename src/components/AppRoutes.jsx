import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom';
import Results from './Results';

const AppRoutes = () => {
  return (
    <div className='p-4 '>
     
        <Routes>
          <Route path="/search" element={<Results />} />
          <Route path="/images" element={<Results />} />
          <Route path="/videos" element={<Results />} />
          <Route path="/news" element={<Results />} />
          <Route
            path="/*"
            element={<Navigate to="/search" replace />}
          />
        </Routes>
    

      {/* <Switch>
        <Route exact path='/'>
          <Redirect to="/search" />
        </Route>
        <Route exact path={['/search', '/news', '/images', '/videos']}>
          <Results />
        </Route>
      </Switch> */}
    </div>
  )
}

export default AppRoutes