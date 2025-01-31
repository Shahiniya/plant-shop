import React from 'react'
import Navbar from '../../navbar'
import Footer from '../../footer'
import { HeroSection,HomePlantsSection,RecentlyPublished,BlogPostsSection} from './customs'

// import HeroSection from './customs/hero'
// import HomePlantsSection from './customs/home-plants'
// import RecentlyPublished from './customs/recently-published'
// import BlogPostsSection from './customs/blog-posts'

const HomePageView = () => {
  return  <>
   <Navbar/>
   <HeroSection/>
   <HomePlantsSection/>
   <RecentlyPublished/>
   <BlogPostsSection/>
   <Footer/>
  </>
  
  
}

export default HomePageView