import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MultiSelectBox from './Components/MultiSelectDropdown/MultiSelectBox'
import UploadAvatar from './Components/UploadAvatarPicture/UploadAvatarPicture';
import UploadMultiPic from './Components/UploadMultiPicture/UploadMultiPicture';
import ResponsiveTopNavbar from './Components/FixedTopNavbar/TopNavbar';
import StickyTopNavbar from './Components/StickyTopNavbar/StickyTopNavbar';
import DraggableSideBar from './Components/DraggableSideBar/DraggableSideBar';
import GetUserLocation from './Components/GetUserLocationFromBrowser/GetUserLocation';
import SearchBar from './Components/ExpandableSearchBar/SearchBar';
import ProductCard from './Components/ResponsiveProductCard/ResponsiveProductCard';

ReactDOM.render(
  <React.StrictMode>
      <div hidden>
          <MultiSelectBox/>
          <UploadAvatar/>
          <UploadMultiPic/>
          <ResponsiveTopNavbar/>
          <StickyTopNavbar/>
          <DraggableSideBar/>
          <GetUserLocation/>
          <SearchBar/>
      </div>
      <ProductCard/>
  </React.StrictMode>,
  document.getElementById('root')
);


