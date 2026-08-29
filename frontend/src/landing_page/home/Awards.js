import React from 'react';

function Awards() {
    return ( 
       <div className='container p-4 mt-5'>
           <div className='row align-items-center justify-content-between'>
               <div className='col-6'>
                  <img src='media/images/largestBroker.svg' alt='' style={{width:"88%"}} />
               </div>
               <div className='col-6 mt-5 ps-4'>
                   <h1 className='fs-2'>Largest stock broker in India</h1>
                   <p className='mb-5'>2+ million Finora clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:</p>
                   <div className='row'>
                       <div className='col-6'>
                           <ul>
                              <li><p>Futures and Options</p></li>
                              <li><p>Commodity derivatives</p></li>
                              <li><p>Currency derivatives</p></li>
                            </ul>
                       </div>
                       <div className='col-6'>
                            <ul>
                               <li><p>Stocks & IPOs</p></li>
                               <li><p>Direct mutual funds</p></li>
                               <li><p>Bonds and Govt. Securities</p></li>
                            </ul>
                       </div>
                   </div>
                   <img src='media\images\pressLogos.png' alt='' style={{width:"85%"}} />
               </div>
           </div>
       </div>
    );
}

export default Awards;