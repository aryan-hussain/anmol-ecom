import { useState } from 'react'
import './App.scss';
import Banner from './components/Banner/Banner';
import BestSeller from './components/BestSeller/BestSeller';
import FeaturedCollection from './components/FeaturedCollection/FeaturedCollection';
import ShopWhatULove from './components/ShopWhatULove/ShopWhatULove';
import InfoBar from './components/InfoBar/InfoBar';

function App() {

  return (
    <>
        <Banner />
        <BestSeller />
        <FeaturedCollection />
        <ShopWhatULove />
        <InfoBar />
    </>
  )
}

export default App
