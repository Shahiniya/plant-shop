// import React from 'react'
import Navbar from '../../navbar'
// import Footer from '../../footer'
import { 
  HeroSection,
  HomePlantsSection,
  RecentlyPublished,
  BlogPostsSection
} from './customs'


const HomePageView = () => {
  return(  <>
   <Navbar/>
   <HeroSection/>
   <HomePlantsSection/>
   <RecentlyPublished/>
   <BlogPostsSection/>
   
  </>
  
  ) 
}

export default HomePageView