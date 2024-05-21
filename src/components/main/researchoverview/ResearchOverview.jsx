import React, {Suspense} from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Container, Row, Col } from 'react-bootstrap';
import StyleOverview from '../researchoverview/ResearchOverview.module.css';


const ResearchOverview = ({subjecttitle, firstchild, secondchild, thirdchild, fourthchild, tickicon, heroimage}) => {
    return (
        <>
 <div className={StyleOverview.allContents}>
    <div className='bg-white'>

    <Container>
      <Row className={StyleOverview.Rows}>
        <Col lg={6} className={StyleOverview.mainText}>
          <h2 className={`[fs-4 mb-4 text-shadow] ${StyleOverview.Subject}`}>{subjecttitle}</h2>
          <ul className={StyleOverview.parentControler}>


            <li className={StyleOverview.listContents}>
                <LazyLoadImage src={tickicon} alt="Bullet-Points-Icon" className={StyleOverview.BulletTick}/>
                          {firstchild}
            </li>


            <li className={StyleOverview.listContents}>
                <LazyLoadImage src={tickicon} alt="Bullet-Points-Icon" className={StyleOverview.BulletTick}/>
                   {secondchild}
            </li>



            <li className={StyleOverview.listContents}>
                <LazyLoadImage src={tickicon} alt="Bullet-Points-Icon" className={StyleOverview.BulletTick}/>
                {thirdchild}
            </li>



            <li className={StyleOverview.listContents}>
                <LazyLoadImage src={tickicon} alt="Bullet-Points-Icon" className={StyleOverview.BulletTick}/>
                {fourthchild}
            </li>


          </ul>
        
        </Col>

        <Col lg={6} className={StyleOverview.ReOvvHeroImg}>
         <Suspense fallback={'Loading..'}>
        <LazyLoadImage src={heroimage} alt="Research Overview Example Image" className="img-fluid"/>
        </Suspense>
        </Col>
      </Row>
    </Container> 
  </div>
  </div> 
        </>
    )
}

export default ResearchOverview;
