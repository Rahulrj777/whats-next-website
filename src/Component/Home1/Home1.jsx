import React from 'react'
import './Home1.css'
import globe from '../../assets/contact_globe.svg'  

const Home1 = () => {
  return (
    <div id="home" className="h1-div">
      
      <img src={globe} alt="rotating globe" className="rotating-img" />

      {/* Text */}
      <p className='h1-p1'>Communicate Efficiently. Engage Effectively. Grow Rapidly</p>
      <p className='h1-p2'>Unlock Seamless Marketing with</p>
      <p className='h1-p3'>WhatsApp Bulk Messaging</p>
      <p className='h1-p4'>Streamline your marketing efforts with WhatsApp Bulk Messaging, reaching customers quickly and boosting business growth.</p>
    </div>
  )
}

export default Home1
