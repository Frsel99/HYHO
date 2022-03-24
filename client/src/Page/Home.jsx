import React from 'react'
import Announcement from '../components/Announcement'
import Categories from '../components/Categories'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Slider from '../components/Slider'
import PopularProducts from '../components/PopularProducts'
import styled from 'styled-components'
import { mobile } from '../responsive'

const Div = styled.div`
${mobile({ flexDirection: 'column' })}
`

const Home = () => {
  return (
    <Div>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <PopularProducts />
      <Newsletter />
      <Footer />
    </Div>
  )
}

export default Home
