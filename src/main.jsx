import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import './index.css';
import Skeleton from './components/common/skeleton/Skeleton.jsx';
import Preload from './components/common/skeleton/preloadskeleton/Preload.jsx';
import App from './App.jsx';
import Home from'../src/pages/home/Home.jsx';
const Error = lazy(() => import('./pages/error/Error.jsx'));
const Alumni = lazy(() => import('./pages/alumni/Alumni.jsx'));
const Professor =lazy(()=> import('../src/pages/professor/Professor.jsx'));
const Research = lazy(()=> import('../src/pages/research/Research.jsx'));
const Publication = lazy(()=> import('../src/pages/publication/Publication.jsx'));
const Members = lazy(()=> import('../src/pages/members/Members.jsx'));
const Groupnews = lazy(()=> import('../src/pages/groupnews/Groupnews.jsx'));
const Instument = lazy(()=> import('../src/pages/instuments/Instument.jsx'));
const Contact = lazy(()=> import('../src/pages/contact/Contact.jsx'));

// ALL PAGE ROUTES 
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Suspense fallback={<Preload/>}><App/></Suspense>}>
      <Route path=''
       element={<Home/>}/>
      <Route path='Professor' element={<Suspense fallback={<Skeleton/>}><Professor/></Suspense>}/>

      <Route path='Research' element={<Suspense fallback={<Skeleton/>}><Research/></Suspense>}/>

      <Route path='Publication' element={<Suspense fallback={<Skeleton/>}><Publication/></Suspense>}/>

      <Route path='Members' element={<Suspense fallback={<Skeleton/>}><Members/></Suspense>}/>

      <Route path='Groupnews' element={<Suspense fallback={<Skeleton/>}><Groupnews/></Suspense>}/>

       <Route path='Alumni' element={<Suspense fallback={<Skeleton/>}><Alumni/></Suspense>}/>

      <Route path='Instument' element={<Suspense fallback={<Skeleton/>}> <Instument/> </Suspense>}/>

      <Route path='Contact' element={<Suspense fallback={<Skeleton/>}><Contact/></Suspense>}/>

      <Route path='*' element={<Suspense fallback={<Skeleton/>}><Error/></Suspense>}/>

    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(

  <RouterProvider router={router}/>

);
