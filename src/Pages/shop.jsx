import React from 'react'
import Hero from '../Components/Hero/hero';
import Popular from '../Components/Popular/popular';
import Offers from '../Components/Offers/offers';
import NewCollections from '../Components/NewCollections/newCollections';
import NewsLetters from '../Components/NewsLetter/newsLetter';

const shop=()=> {
  return (
    <div>
      <Hero />
      <Popular />
      <Offers />
      <NewCollections />
      <NewsLetters  />
    </div>
  )
}

export default shop