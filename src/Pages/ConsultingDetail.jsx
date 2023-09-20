import React from 'react'
import Header from '../Components/Header'
import Consulting from "../Assets/ConsultingLogo.png"
import Footer from '../Components/Footer'

const ConsultingDetail = () => {
  return (
    <div className='Service-Detail'>
      <Header></Header>
      <p className='Title'>Services</p>
      <div className='Service-Detail-Card'>
        <img src={Consulting} alt='Promotion' className='Service-Image'></img>
        <div className='Service-Detail-Text'>
            <p className='Title-Services-Detail'>Consulting</p>
            <p className='Description-Services-Detail'>
            If you need consultation about your music, you can just reach out to our experienced team of music industry experts. We offer personalized 
            guidance and insights tailored to your specific goals and challenges. Whether you're looking for advice on songwriting, production, 
            marketing strategies, or navigating the complexities of the music business, our dedicated consultants are here to provide you with the 
            knowledge and support you need to succeed. Simply contact us, and we'll schedule a consultation to address your concerns and help you make 
            informed decisions to advance your music career.
            </p>
            <p className='Description-Services-Detail'><b>Requirement</b>: Music can't contain hate speech, racism, or any kind of discrimination</p>
            <p className='Price-Services-Detail'>IDR 550K</p>
            <button className='Button-Services-Detail'>Add To Cart</button>
        </div> 
      </div>
      <Footer></Footer>
    </div>
  )
}

export default ConsultingDetail
