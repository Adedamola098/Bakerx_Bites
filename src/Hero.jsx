import React from 'react'
import Section from './Section'
import Header from './Header'
import Product from './Product'
import { Link } from 'react-router-dom'
import CategoryLinks from './CategoryLinks'
import BakeryHeroSection from './BakerySection'
import FactsSection from './FactsSection'
import Services from './Services'
import Video from './Video'
import Gallery from './Gallery'
import Faq from './Faq'
import SpecialOffers from './SpecialOffers'
import CustomerReviews from './CustomerReviews'


const Hero = () => {
  return (
    <>
      <BakeryHeroSection />
      <FactsSection />
      <Services />
      <CategoryLinks />
     <SpecialOffers />
      <Video />
     <Gallery />
     <CustomerReviews />
     <Faq />
      </>
  )
}

export default Hero
