import { React, Suspense, lazy, memo} from 'react';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProfOverviewStyle from '../profoverview/ProfOverview.module.css';
const Achivment = lazy(()=> import('./achivments/Achivment.jsx'));




const ProfOverview = ({name, possition, description, professorimg}) => {
  
    return (
        
    
    <>
    <div className='bg-white py-5'>
   
    <Container>
      <Row>
      <Col lg={6} className={ProfOverviewStyle.ProfessorOverviewImg}>
        <Suspense fallback={'Loading..'}>
        <LazyLoadImage src={professorimg} alt="Dr. Chinmoy Bhattacharya Photo" className="img-fluid"/>
        </Suspense>
        </Col>
        <Col lg={6} className={ProfOverviewStyle.heroText}>
          <h2 className={` [fs-4 mb-4 text-shadow] ${ProfOverviewStyle.Title}`}>{name}</h2>
          <h5 className='text-center'>{possition}</h5>
          <p className='text-center'>{description}</p>
          <Suspense fallback={'Loading..'}>
          <Achivment publication={'Total Publications'} journal={'Journal Articles'}
            conference={'Conference Proceedings'} projects={'Projects'}/>
              <Link to={'/Professor'} className='common_btn'>Read More</Link>
              </Suspense>
        </Col>
      </Row>
    </Container>
  </div>
  </>
);
}

export default memo(ProfOverview);
