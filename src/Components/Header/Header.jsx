import React from 'react'

const Header = () => {
  return (
    <div className='hero'>
        <div className='hero-left'>
               <h2>Menatl healthy support</h2>
            <div>
             
                <div className='hero-hand-icon'>
                
                 <p>NEW way of Solving your well being </p>
                    <img src={hand_icon} alt="" />
                </div>
          
                <p> we </p>
                <p> help everyone</p>
            </div>
             <div className='hero-lastest-icon'>
                <div> Last client testimony</div>
                <img src={arrow_icon} alt=""/>
             </div>
        </div>
        <div className='hero-right'>
            <img src={hero_image} alt="" />

        </div>
      
    </div>
  )
}

export default Header
