import React from 'react'
import { Helmet } from 'react-helmet'
import Navigation from '../components/navigation'
import Footer8 from '../components/footer8'
import './solution-demo.css'
import './app.css'
import  { useState } from 'react';
import ArcgisMap from '../components/ArcgisMap';
import callAPIs from '../utils';
import City from '../components/City';
import PlaceList from '../components/PlaceList';

const SolutionDemo = (props) => {

  const [industry, setIndustry] = useState('restaurant');
  const [type, setType] = useState('RR');
  const [district, setDistrict] = useState('Tsuen Wan District');
  const [sub_district, setSubDistrict] = useState('Tsuen Wan');
  const [rent_min, setRentMin] = useState(400);
  const [rent_max, setRentMax] = useState(50000)

  const [islogin,setIslogin] = useState(false);

  const paramValue ={
    industry,setIndustry,
    type,setType,
    district,setDistrict,
    sub_district,setSubDistrict,
    rent_min,setRentMin,
    rent_max,setRentMax
  }
  
  
  const [schedule, setSchedule] = useState([]);
  const [allPlaces, setAllPlaces] = useState([]);
  

  const [showArray, setShowArray] = useState([false, true, false])
  const [show1, show2, show3] = showArray;

  const onSearchClicked = () => {
    const embeddedSearchFields = {
      industry: industry,
      type: type,
      district: district,
      sub_district: sub_district,
      rent_min: rent_min,
      rent_max: rent_max,
    }
    const apiurl = "search/queryinfo"
    callAPIs(embeddedSearchFields, setAllPlaces, apiurl);

  }


  return (
    <div className="solution-demo-container">
      <Helmet>
        <title>Solution-Demo - Store Choicy</title>
        <meta property="og:title" content="Solution-Demo - Store Choicy" />
      </Helmet>
      <Navigation></Navigation>
      <main className="solution-demo-main">
         <div className="solution-demo-hero section-container">
          {/* <div className="solution-demo-max-width max-content-container">
           <div className="solution-demo-gallery">
              <div className="solution-demo-container1"> */}
                {/* <img
                  alt="image"
                  src="/rectangle%2095%20%5B4%5D-1000w.png"
                  className="solution-demo-image"
                /> */}
                  <div className="input">
                      <City  paramValue={paramValue}  ></City> 
                      <button id="search" variant="contained" onClick={onSearchClicked} >Search</button>
                  </div>
                  <div className='indented'>
                      <PlaceList schedule={schedule}  allPlaces={allPlaces} />
                      <div id="map" className="map">
                          <ArcgisMap schedule={schedule}  allPlaces={allPlaces} /> 
                      </div>  
                  </div>
              {/* </div>
            </div> 
          </div>*/}
        </div>
      </main>
      <div className="solution-demo-footer section-container">
        <Footer8 rootClassName="footer8-root-class-name1"></Footer8>
      </div>
    </div>
  )
}

export default SolutionDemo
