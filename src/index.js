import React from 'react';
import ReactDOM from 'react-dom';
/*
import AutoResizeTextArea from './Components/AutoResizeableTextarea/autoResizeTextarea';
import CameraAccess from './Components/CameraAccessFromBrowser/CameraAccess';
import ResponsiveCallender from './Components/ResponsiveDarkModeCallender/Callender';
import Testing from './Components/testing/test';
import MultiStepForm from './Components/MultiStepForm/MultiStepForm';
import MultiSelectBox from './Components/MultiSelectDropdown/MultiSelectBox'
import UploadAvatar from './Components/UploadAvatarPicture/UploadAvatarPicture';
import UploadMultiPic from './Components/UploadMultiPicture/UploadMultiPicture';
import ResponsiveTopNavbar from './Components/FixedTopNavbar/TopNavbar';
import StickyTopNavbar from './Components/StickyTopNavbar/StickyTopNavbar';
import GetUserLocation from './Components/GetUserLocationFromBrowser/GetUserLocation';
import SearchBar from './Components/ExpandableSearchBar/SearchBar';
import ProductCard from './Components/ResponsiveProductCard/ResponsiveProductCard';
import Pagination from './Components/Pagination/pagination';
import SlidingCard from './Components/ResponsiveSliderCard/SlidingCard';
import PersonCard from './Components/ResponsivePersonCard/PersonCard';
import ResponsiveBoxModel from './Components/ResponsiveBoxModel/ResponsiveBoxModel';
import DraggableSideBar from './Components/DraggableSideBar/DraggableSideBar';
*/
import SpeedDial from './Components/speedDial/SpeedDial.jsx';

ReactDOM.render(
  <React.StrictMode>
      {/*<div hidden>
          <DraggableSideBar/>
          <MultiSelectBox/>
          <UploadAvatar/>
          <UploadMultiPic/>
          <ResponsiveTopNavbar/>
          <StickyTopNavbar/>
          <GetUserLocation/>
          <SearchBar/>
          <ProductCard/>
          <Pagination/>
          <SlidingCard/>
          <PersonCard/>
          <MultiStepForm/>
          <FixedBottomFooter/>
          <BoxModel/>
          <ResponsiveBoxModel/>
          <ResponsiveCallender/>
          <AutoResizeTextArea/>
          <CameraAccess/>
        </div>*/}
        <SpeedDial/>
  </React.StrictMode>,
  document.getElementById('root')
);


