import React from 'react'
import Header from '../Components/Header'
import Promotion from "../Assets/PromotionLogo.png"
import Footer from '../Components/Footer'

const PromotionDetail = () => {
  return (
    <div className='Service-Detail'>
      <Header></Header>
      <h1 className='Service-Title'>Services</h1>
      <div className='Service-Detail-Card'>
        <img src={Promotion} alt='Promotion' className='Service-Image'></img>
        <div className='Service-Detail-Text'>
            <p className='Title-Services-Detail'>Promotion</p>
            <p className='Description-Services-Detail'>
            We will advertise your music to 4 social media platforms (<b>Instagram, YouTube, and Tiktok</b>) 
            by applying a comprehensive and targeted marketing strategy. Our team of experienced digital 
            marketing specialists will create engaging and eye-catching content, optimize your posts for 
            each platform's algorithm, and strategically schedule posts to maximize visibility and engagement. 
            Additionally, we will leverage paid advertising campaigns and data 
            analytics to ensure your music reaches the widest and most relevant audience possible, helping you 
            gain the recognition and exposure you deserve.
            </p>
            <p className='Description-Services-Detail'><b>Requirement</b>: Music can't contain hate speech, racism, or any kind of discrimination</p>
            <p className='Price-Services-Detail'>IDR 800K</p>
            <button className='Button-Services-Detail'>Add To Cart</button>
        </div> 
      </div>
      <Footer></Footer>
    </div>
  )
}

export default PromotionDetail
