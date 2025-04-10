import React from 'react';

function Hero() {
    return ( 
       <div className='container p-5 mb-5'> 
           <div className='row text-center'>
               <img src='media/homeHero.png' alt='Hero Image' className='mb-5'/>
               <h1 className='mt-5'>Invest In Everything</h1> 
               <p>Online Platform to invest in stocks, derivatives, mutual funds, and more</p>
               <div className='d-flex justify-content-center'>
                   <button className='btn btn-primary fs-5 mb-5'>Signup Now</button>
               </div>
           </div>
       </div>
    );
}

export default Hero;

