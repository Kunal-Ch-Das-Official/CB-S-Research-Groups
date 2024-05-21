import React from 'react';
import { Outlet } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../src/components/common/navbar/Header.jsx';
import Footer from '../src/components/common/footer/Footer.jsx';
import ShibpurBrand from './components/common/shibpurbrand/ShibpurBrand.jsx';
import { Helmet } from 'react-helmet';





function App() {
  return (
    <> 
    <Helmet>
      <title>cbs-research-group</title>
      <meta name="keywords" content="Dr. Chinmoy Bhattacharya,
      IIEST Shibpur, best chemistry professor
       electrochemistry lab, Science,
        PHD Admission, Masters in Electrochemistry "  />
       <meta name="description" content="Dr. Chinmoy Bhattacharya, Best electrochemistry professor in india"  />
    </Helmet>
    {/* TOP OF SHIBPUR LOGO  */}
    <ShibpurBrand/>

    {/* NAVBAR  */}
    <Header/>

    {/* MAIN BODY OF APP  */}
    <Outlet/>

    {/* FOOTER SECTION  */}
    <Footer/>

    </>
  )
}

export default App;
